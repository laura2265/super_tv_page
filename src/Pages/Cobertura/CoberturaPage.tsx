import "../../assets/css/pages/cobertura.css"
import "../../assets/css/pages/mapa.css"
import { TILE_URL, MAP_CENTER,MAP_ZOOM, zones, type Zone, type ZoneCoords, groups } from "../../assets/hooks/map/coverageData.js";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; 
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const baseStyle: L.PathOptions = {
  color: "#00ff6a",
  weight: 2,
  fillColor: "#00ff6a",
  fillOpacity: 0.14,
};

const highlightStyle: L.PathOptions = {
  color: "#22c7b8",
  weight: 4,
  fillColor: "#00ff6a",
  fillOpacity: 0.28,
};

function toBounds(coords: ZoneCoords) {
  const b = L.latLngBounds([]);
  if (!coords) return b;

  if (Array.isArray(coords[0]) && typeof (coords[0] as any)[0] === "number") {
    b.extend(coords as any);
  } else {
    (coords as any).forEach((poly: any) => b.extend(poly));
  }
  return b;
}

function glowIcon({ pulse = true } = {}) {
  const html = `<div class="glow-marker ${pulse ? "glow-pulse" : ""}"></div>`;
  return L.divIcon({
    className: "glow-icon",
    html,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
}



function CoberturaPage(){
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const [addressQuery, setAddressQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResultLabel, setSearchResultLabel] = useState<string | null>(null);
  
  const searchMarkerRef = useRef<L.Marker | null>(null);
  const layersByIdRef = useRef<Record<string, L.FeatureGroup | L.Polygon>>({});
  const [openGroupId, setOpenGroupId] = useState<string>(() => groups[0]?.id ?? "");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const [suggestions, setSuggestions] = useState<ApiGeocodeItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchTimeoutRef = useRef<number | null>(null);

  const toggleAndFocusGroup = useCallback((groupId: string) => {
    setOpenGroupId((prev) => {
      const next = prev === groupId ? "" : groupId;
      if (next) focusGroup(groupId);
      return next;
    });
  }, []);

  const chipToGroupId: Record<string, string> = {
  "Ciudad Jardín": "CIUDAD_JARDIN",  
  "Paraíso": "PARAISO",
  "San Francisco": "SAN_FRANCISCO",
  "La Estrella": "LA_ESTRELLA",
  "San Carlos": "SAN_CARLOS",
};

  const [visible, setVisible] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    zones.forEach((z) => (init[z.id] = true));
    return init;
  });
      
  type ApiGeocodeItem = {
    lat: number;
    lng: number;
    label: string;
    confidence: number | null;
    components: Record<string, any>;
  };

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  async function geocodeAddress(q: string): Promise<ApiGeocodeItem[]> {
    const url = new URL(`${API_URL}/api/maps/geocode`);
    url.searchParams.set("q", q);
    
    const res = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
      },
    });
  
    const data = await res.json();
  
    if (!res.ok || !data?.ok) {
      throw new Error(data?.message || "No fue posible consultar la dirección");
    }
  
    return Array.isArray(data.results) ? data.results : [];
  }

  async function fetchSuggestions(rawValue: string) {
    const raw = rawValue.trim();

    if (raw.length < 4) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const q = normalizeColombiaQuery(raw);
      const results = await geocodeAddress(q);

      const filtered = results
        .filter((item) => {
          const city =
            item.components?.city ||
            item.components?.town ||
            item.components?._normalized_city ||
            "";
          const country = item.components?.country || "";

          return /bogot/i.test(city) && /colombia/i.test(country);
        })
        .sort((a, b) => (b.confidence ?? 0) - (a.confidence ?? 0))
        .slice(0, 6);

      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } catch {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }

  const zonesById = useMemo(() => {
    const m = new Map<string, Zone>();
    zones.forEach((z) => m.set(z.id, z));
    return m;
  }, []);

  const checkedCount = useMemo(() => Object.values(visible).filter(Boolean).length, [visible]);

  

  const ensureLayer = useCallback((zone: Zone) => {
    const existing = layersByIdRef.current[zone.id];
    if (existing) return existing;

    let layer: L.FeatureGroup | L.Polygon;

    if (Array.isArray(zone.coords[0]) && typeof (zone.coords as any)[0][0] === "number") {

      layer = L.polygon(zone.coords as any, baseStyle).bindTooltip(zone.name, { sticky: true });
    } else {
      const fg = L.featureGroup();
      (zone.coords as any).forEach((polyCoords: any) => {
        L.polygon(polyCoords, baseStyle).bindTooltip(zone.name, { sticky: true }).addTo(fg);
      });
      layer = fg;
    }

    layersByIdRef.current[zone.id] = layer;
    return layer;
  }, []);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, { zoomControl: false }).setView(MAP_CENTER, MAP_ZOOM);
    L.tileLayer(TILE_URL, { attribution: "" }).addTo(map);

    mapInstanceRef.current = map;

    zones.forEach((z) => {
      const layer = ensureLayer(z);
      layer.addTo(map);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      layersByIdRef.current = {};
    };
  }, [ensureLayer]);

  const setLayerVisible = useCallback(
    (zoneId: string, isVisible: boolean) => {
      const map = mapInstanceRef.current;
      const zone = zonesById.get(zoneId);
      if (!map || !zone) return;

      const layer = ensureLayer(zone);

      if (isVisible) {
        if (!map.hasLayer(layer)) layer.addTo(map);
        (layer as any).bringToFront?.();
      } else {
        if (map.hasLayer(layer)) map.removeLayer(layer);
        if (highlightedId === zoneId) setHighlightedId(null);
      }
    },
    [ensureLayer, zonesById, highlightedId]
  );

  const clearHighlight = useCallback((zoneId: string) => {
    const layer = layersByIdRef.current[zoneId];
    if (!layer) return;

    (layer as any).setStyle?.(baseStyle);
    (layer as any).eachLayer?.((l: any) => l.setStyle?.(baseStyle));
  }, []);

  const highlightAndFocus = useCallback(
    (zoneId: string) => {
      const map = mapInstanceRef.current;
      const zone = zonesById.get(zoneId);
      if (!map || !zone) return;

      if (highlightedId && highlightedId !== zoneId) clearHighlight(highlightedId);

      setVisible((prev) => ({ ...prev, [zoneId]: true }));
      setLayerVisible(zoneId, true);

      const layer = ensureLayer(zone);

      (layer as any).setStyle?.(highlightStyle);
      (layer as any).eachLayer?.((l: any) => l.setStyle?.(highlightStyle));

      const bounds = (layer as any).getBounds?.() ?? toBounds(zone.coords);
      if (bounds && bounds.isValid?.()) {
        map.fitBounds(bounds, { padding: [30, 30] });
      }

      setHighlightedId(zoneId);
    },
    [zonesById, ensureLayer, setLayerVisible, highlightedId, clearHighlight]
  );

  function pointInRing(point: [number, number], ring: [number, number][]) {
    const [py, px] = point;
    let inside = false;

    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [iy, ix] = ring[i];
      const [jy, jx] = ring[j];

      const intersect =
        ix > px !== jx > px &&
        py < ((jy - iy) * (px - ix)) / (jx - ix + 0.0) + iy;

      if (intersect) inside = !inside;
    }
    return inside;
  }

  function findZoneByPoint(point: [number, number]) {
    for (const z of zonesById.values()) {
      const c: any = z.coords;

      const isPolygon = Array.isArray(c[0]) && typeof c[0][0] === "number";
      if (isPolygon) {
        if (pointInRing(point, c as [number, number][])) return z.id;
        continue;
      }

      for (const ring of c as [number, number][][]) {
        if (pointInRing(point, ring as any)) return z.id;
      }
    }
    return null;
  }

  const handleSelectSuggestion = useCallback((item: ApiGeocodeItem) => {
    const map = mapInstanceRef.current;
    if (!map) return;
    
    const pos: [number, number] = [item.lat, item.lng];
    
    if (!searchMarkerRef.current) {
      searchMarkerRef.current = L.marker(pos).addTo(map);
    } else {
      searchMarkerRef.current.setLatLng(pos);
    }
  
    searchMarkerRef.current.bindPopup(item.label).openPopup();
    map.flyTo(pos, 17, { duration: 1.1 });
  
    setAddressQuery(item.label);
    setSearchResultLabel(item.label);
    setSearchError(null);
    setSuggestions([]);
    setShowSuggestions(false);
  
    const zoneId = findZoneByPoint(pos);
    if (zoneId) {
      highlightAndFocus(zoneId);
      const group = groups.find((g) => g.zoneIds.includes(zoneId));
      if (group) setOpenGroupId(group.id);
    } else {
      setSearchError("Encontré la dirección, pero está fuera de la cobertura.");
    }
  }, [findZoneByPoint, highlightAndFocus]);

  const onSearchAddress = useCallback(async () => {
    const raw = addressQuery.trim();

    if (!isSpecificEnoughAddress(raw)) {
      setSearchError("Escribe una dirección completa. Ej: Cra 43 # 58C-30 Sur, Bogotá.");
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResultLabel(null);

    try {
      const q = normalizeColombiaQuery(raw);
      const results = await geocodeAddress(q);

      const filtered = results
        .filter((item) => {
          const city =
            item.components?.city ||
            item.components?.town ||
            item.components?._normalized_city ||
            "";
          const country = item.components?.country || "";

          return /bogot/i.test(city) && /colombia/i.test(country);
        })
        .sort((a, b) => (b.confidence ?? 0) - (a.confidence ?? 0));

      if (!filtered.length) {
        setSearchError("No encontré resultados con esa dirección.");
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setSuggestions(filtered);
      setShowSuggestions(true);

      if (filtered.length === 1) {
        handleSelectSuggestion(filtered[0]);
      }
    } catch (error: any) {
      setSearchError(error?.message || "Error consultando direcciones.");
      setSuggestions([]);
      setShowSuggestions(false);
    } finally {
      setIsSearching(false);
    }
  }, [addressQuery, handleSelectSuggestion]);

  const onToggleCheckbox = (zoneId: string, v: boolean) => {
    setVisible((prev) => ({ ...prev, [zoneId]: v }));
    if (!v) clearHighlight(zoneId);

  };

  const clearSearch = useCallback(() => {
    const map = mapInstanceRef.current;
    setAddressQuery("");
    setSearchError(null);
    setSearchResultLabel(null);
    setSuggestions([]);
    setShowSuggestions(false);

    if (searchMarkerRef.current && map) {
      map.removeLayer(searchMarkerRef.current);
      searchMarkerRef.current = null;
    }

    if (highlightedId) clearHighlight(highlightedId);
    setHighlightedId(null);

    if (map) map.setView(MAP_CENTER, MAP_ZOOM);
  }, [highlightedId, clearHighlight]);

  function normalizeColombiaQuery(raw: string) {
    let q = raw.trim();
    
    q = q.replace(/\b(cra|cr|carrera)(\d+)/gi, "$1 $2");
    q = q.replace(/\b(cl|calle|av|avenida|diag|diagonal|trans|tv|trv)(\d+)/gi, "$1 $2");

    q = q.replace(/#(\S)/g, "# $1");
    q = q.replace(/\s+/g, " ");

    q = q.replace(/(\d+)\s*(sur|norte|este|oeste)\b/gi, "$1 $2");

    const hasColombia = /colombia/i.test(q);
    const hasBogota = /bogot[aá]/i.test(q);

    if (!hasBogota) q = `${q}, Bogotá`;
    if (!hasColombia) q = `${q}, Colombia`;

    return q;
  }

  function isSpecificEnoughAddress(value: string) {
    const q = value.trim().toLowerCase();
    const hasStreetType = /\b(cra|cr|carrera|calle|cl|diag|diagonal|trans|tv|trv|av|avenida)\b/.test(q);
    const hasNumber = /\d+/.test(q);
    const hasHash = /#/.test(q);

    return q.length >= 8 && hasStreetType && hasNumber && hasHash;
  }

  //Mi ubicación 
  const onLocateMe = useCallback(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (!navigator.geolocation) {
      setSearchError("Tu navegador no soporta geolocalización.");
      return;
    }

    setSearchError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const p: [number, number] = [lat, lng];

        if (!searchMarkerRef.current) {
          searchMarkerRef.current = L.marker(p, { icon: glowIcon({ pulse: true }) }).addTo(map);
        } else {
          searchMarkerRef.current.setLatLng(p);
        }

        searchMarkerRef.current.bindPopup("Estás aquí").openPopup();
        map.flyTo(p, 17, { duration: 1.1 });

        const zoneId = findZoneByPoint(p);
        if (zoneId) {
          highlightAndFocus(zoneId);
          const group = groups.find((g) => g.zoneIds.includes(zoneId));
          if (group) setOpenGroupId(group.id);
        }
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setSearchError("Permiso de ubicación denegado.");
        } else {
          setSearchError("No pude obtener tu ubicación.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, [highlightAndFocus]);

  //Localizar subzonas
  const focusGroup = useCallback((groupId: string) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const g = groups.find((x) => x.id === groupId);
    if (!g) return;

    const bounds = L.latLngBounds([]);
    g.zoneIds.forEach((zoneId) => {
      const z = zonesById.get(zoneId);
      if (!z) return;

      setVisible((prev) => ({ ...prev, [zoneId]: true }));
      setLayerVisible(zoneId, true);

      const layer = ensureLayer(z);
      const b = (layer as any).getBounds?.() ?? toBounds(z.coords);
      if (b?.isValid?.()) bounds.extend(b);
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }, [zonesById, ensureLayer, setLayerVisible]);
    return(
        <>
            <section className="coverage-hero">
              <div className="coverage-hero__inner">
                <div className="coverage-hero__left">
                  <h1>Cobertura</h1>
                  <p>Descubre si tenemos cobertura para ti.</p>

                    <div className="cov-search">
                      <div className="cov-row">
                        <div className="cov-field" id="covField">
                          <span className="cov-icon">📍</span>

                          <div className="cov-inputWrap">
                            <label className="cov-label">Dirección o barrio</label>
                            <input
                              id="coverageSearchInput"
                              type="text"
                              placeholder="Ej: Cra 7 # 72-41, Bogotá o Ciudad Jardín"
                              autoComplete="off"
                              value={addressQuery}
                              onChange={(e) => {
                                const value = e.target.value;
                                setAddressQuery(value);
                                setSearchError(null);
                                setSearchResultLabel(null);

                                if (searchTimeoutRef.current) {
                                  window.clearTimeout(searchTimeoutRef.current);
                                }
                              
                                if (!value.trim()) {
                                  setSuggestions([]);
                                  setShowSuggestions(false);
                                  return;
                                }
                              
                                searchTimeoutRef.current = window.setTimeout(() => {
                                  fetchSuggestions(value);
                                }, 350);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") onSearchAddress();
                              }}
                            />
                          </div>

                          <button
                            id="btnClearSearch"
                            className="cov-clear"
                            type="button"
                            aria-label="Limpiar"
                            onClick={clearSearch}
                            disabled={!addressQuery.trim() && !searchMarkerRef.current}
                          >
                            ✕
                          </button>

                          {showSuggestions && suggestions.length > 0 && (
                            <div
                              id="covDropdown"
                              className={`cov-dd ${showSuggestions && suggestions.length > 0 ? "is-open" : ""}`}
                              aria-hidden={!(showSuggestions && suggestions.length > 0)}
                            >
                              {suggestions.map((item, idx) => {
                                const city =
                                  item.components?.city ||
                                  item.components?.town ||
                                  item.components?._normalized_city ||
                                  "";
                                const suburb =
                                  item.components?.suburb ||
                                  item.components?.neighbourhood ||
                                  "";
                                const postcode = item.components?.postcode || "";
                              
                                return (
                                  <button
                                    key={`${item.lat}-${item.lng}-${idx}`}
                                    type="button"
                                    className="cov-ddItem"
                                    onClick={() => handleSelectSuggestion(item)}
                                  >
                                    <div style={{ fontWeight: 600 }}>{item.label}</div>
                                    <small>
                                      {suburb ? `${suburb} · ` : ""}
                                      {city ? `${city} · ` : ""}
                                      {postcode}
                                    </small>
                                    {item.confidence != null && (
                                      <small style={{ display: "block", marginTop: 4 }}>
                                        Confianza: {item.confidence}
                                      </small>
                                    )}
                                  </button>
                                );
                              })}

                              <div className="cov-ddFooter">
                                <span className="cov-ddHint">Selecciona la dirección correcta</span>
                              </div>
                            </div>
                          )}
                        </div>

                        
                        <div className="cov-actions">
                          <button
                            className="cov-btn cov-btnGhost"
                            type="button"
                            onClick={onLocateMe}
                          >
                            <span className="ic">📍</span> Mi ubicación
                          </button>
                          <button 
                            id="btnSearch"
                            className="planes-promo__btn planes-promo__btn--primary cov-search__btn" 
                            type="button"
                            onClick={onSearchAddress}
                            disabled={isSearching}
                          >
                            {isSearching?"Buscando": "Buscar"} <span className="ic">→</span>
                          </button>
                        </div>
                      </div>

                      <div className="cov-chips">
                        {["Ciudad Jardín", "Paraíso", "San Francisco", "La Estrella"].map((label) => (
                          <button
                            key={label}
                            className="cov-chip"
                            type="button"
                            onClick={() => {
                              const groupId = chipToGroupId[label];
                              if (!groupId) return;
                            
                              setAddressQuery(label);
                            
                              toggleAndFocusGroup(groupId);
                            }}
                          >
                            {label}
                          </button>
                        ))}
                      </div>

                      <div className="cov-tip" id="coverageStatus">
                        <span className="cov-tipDot"></span>
                        <div className="cov-tipText">
                          
                        {searchError && <div className="cov-search__error">{searchError}</div>}
                        {searchResultLabel ? <div className="cov-search__ok">{searchResultLabel}</div>: <><strong>Tip:</strong> escribe tu dirección completa para obtener mejores resultados.</>}
                          
                        </div>
                      </div>
                    </div>
                        
                    </div>
            </div>
          </section>


            <section className="coverage-stage">
              <div className="coverage-wrap">
              <div className="coverage-grid">

                <aside className="coverage-panel" id="coverage-panel">
                  <div className="cov-head">
                    <div className="cov-head__icon">📍</div>
                    <div className="cov-text-panel"> 
                      <h3>Zonas de cobertura</h3>
                      <p>Selecciona una zona para verla en el mapa</p>
                    </div>
                  </div>

                  <div className="cov-list">
                    <div className="">
                      {groups.map((g) => (
                        <div key={g.id} className={`cov-group ${openGroupId === g.id ? "is-open" : ""}`}>
                          <button
                            type="button"
                            className="cov-group__btn"
                            onClick={() => setOpenGroupId((prev) => (prev === g.id ? "" : g.id))}
                          >
                            <span className="title">{g.title}</span>
                            
                          <span className="chev">▾</span>
                          </button>
                      
                          {openGroupId === g.id && (
                            <div className="cov-group__body">
                              {g.zoneIds.map((zoneId) => {
                                const z = zonesById.get(zoneId);
                                if (!z) return null;
                              
                                return (
                                  <div key={zoneId} className={`cov-item ${highlightedId === zoneId ? "is-highlighted" : ""}`}>
                                    <label className="cov-item__row">
                                      <input
                                        type="checkbox"
                                        checked={!!visible[zoneId]}
                                        onChange={(e) => onToggleCheckbox(zoneId, e.target.checked)}
                                      />
                                      <span className="text">{z.name}</span>
                                    </label>
                                
                                    <button
                                      type="button"
                                      className="cov-item__focus"
                                      onClick={() => {
                                        // abre el grupo (como tu JS viejo)
                                        setOpenGroupId(g.id);
                                        // asegura visible y enfoca
                                        highlightAndFocus(zoneId);
                                      }}
                                    >
                                      <i className="bi bi-hand-index-fill"></i>
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="cov-footer">
                    <div className="cov-count">
                      <span className="dot"></span>
                      <strong id="covCount">{checkedCount}</strong>
                      <span>zonas con cobertura</span>
                    </div>
                  </div>
                </aside>

                <div style={{ width: "100%", height: "600px" }}>
                  <div
                    ref={mapRef}
                    style={{ width: "100%", height: "100%", borderRadius: "12px" }}
                  />
                </div>
                
              </div>
              </div>
            </section>


            <section className="horarios">
              <div className="horarios__container">
                <h2 className="horarios__title">Horarios de Oficina</h2>
                <p className="horarios__subtitle">
                  Encuentra la oficina más cercana y sus horarios de atención.
                </p>

                <div className="horarios__grid">

                  <article className="office-card" 
                    data-weekday-open="08:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"

                    data-address="Cl. 70a Bis Sur #17d-26, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Quintas</h3>
                      <p className="office-address">Cl. 70a Bis Sur #17d-26</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00– 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>


                  <article className="office-card" 
                    data-weekday-open="08:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="Cl. 76 Sur #18c-2 a 18c-76, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Estrella</h3>
                      <p className="office-address">Cl. 76 Sur #18c-2 a 18c-76</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 – 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card"
                    data-weekday-open="08:00"
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="Cl. 66A Sur #17d-21, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Alameda</h3>
                      <p className="office-address">Cl. 66A Sur #17d-21</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Sabado</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>No Hay Servicio</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>

                  </article>

                  <article className="office-card" 
                    data-weekday-open="09:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="CR 19 B 61 85 SUR, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Acacias</h3>
                      <p className="office-address">CR 19 B 61 85 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>9:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="08:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="CR 20 65 25 SUR, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina San Francisco</h3>
                      <p className="office-address">CR 20 65 25 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="10:00" 
                    data-weekday-close="16:30"
                    data-sunhol-open="09:00"
                    data-sunhol-close="13:00"
                    data-address="Cl. 71p Sur #27f-10, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Paraiso</h3>
                      <p className="office-address">Cl. 71p Sur #27f-10</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>10:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="8:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="CL 19 12C 15 SUR, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Ciudad Jardin</h3>
                      <p className="office-address">CL 19 12C 15 SUR</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00 </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="11:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="Cl. 41 Sur # 26-35, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Ingles</h3>
                      <p className="office-address">Cl. 41 Sur # 26-35</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>11:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="8:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="Cl. 33 Sur #23, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina Quiroga</h3>
                      <p className="office-address">Cl. 33 Sur #23</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:00</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00  </strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>

                  <article className="office-card" 
                    data-weekday-open="8:00" 
                    data-weekday-close="16:30"
                    data-sunhol-closed="true"
                    data-address="CL 19 C 52 SUR 26, Bogotá, Colombia"
                  >
                    <div className="office-card2">
                      <div className="office-top">
                        <div className="office-chip">
                          <span className="dot"></span>
                          Oficina de atención
                        </div>

                        <div className="office-tag">
                          📍 Consultas
                        </div>
                      </div>

                      <h3 className="office-title">Oficina San Carlos</h3>
                      <p className="office-address">CL 19 C 52 SUR 26</p>

                      <div className="office-status open">
                        <span className="pulse"></span>
                        Abierto ahora
                        <span className="office-hours-mini">• Cierra 4:30 pm</span>
                      </div>

                      <div className="office-hours">
                        <div className="row">
                          <span>Lunes a Viernes</span>
                          <strong>8:00 – 16:30</strong>
                        </div>
                        <div className="row">
                          <span>Domingos y festivos</span>
                          <strong>9:00 - 13:00</strong>
                        </div>
                      </div>

                      <div className="office-services">
                        <span className="badge">🧾 Pagos</span>
                        <span className="badge">🧑‍💻 Consultas</span>
                        <span className="badge">🛠️ Soporte</span>
                      </div>

                      <div className="office-actions">
                        <button className="btn-map">Ver en mapa →</button>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
        </>
    )
}

export default CoberturaPage