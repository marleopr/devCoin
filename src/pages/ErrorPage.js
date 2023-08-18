import { useNavigate } from "react-router-dom"
import SquareLoader from "../components/SquareLoader"
import { goToHomePage } from "../routes/Cordinator"
import pageNotFound from "../assets/pagina-nao-encontrada.png"
const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'white', textShadow: '-1px 0 black, 0 1px #0a37ff, 1px 0 #ff0000, 0 -1px rgb(0, 81, 255)' }}>Página não encontrada</h1>
            <img src={pageNotFound} alt="Page Not Found" style={{ width: '100px', marginBottom: '20px' }} />
            <button onClick={() => goToHomePage(navigate)} style={{ width: '180px', marginBottom: '50px' }} className="buttonAll">Voltar ao início</button>
            <SquareLoader />
        </div >

    )
}
export default ErrorPage