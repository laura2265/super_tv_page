import '../../assets/css/Error.css';
import imgError from "../../assets/Img/error.png"
function ErrorPage(){

    return(
        <div className='error'>
            <div className='contentError'>
                <img src={imgError} alt="Error 404"></img>
                <h1>Error 404</h1>
                <p>La página que estás buscando no existe...</p>
            </div>
        </div>
    );
}

export default ErrorPage;