import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import useHomeEffect from "../../assets/hooks/useHomeEffects";


function MainLayout(){
    useHomeEffect();
    return(
        <>
        <div id="pageLoader" className="page-loader" aria-hidden="true">
          <div className="loader-spinner"></div>
        </div>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout