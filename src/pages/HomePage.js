import { useNavigate } from "react-router-dom"
import { goToSearchAcoes, goToSearchCriptos } from "../routes/Cordinator"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
            <div onClick={() => goToSearchAcoes(navigate)} className="radio-wrapper">
                <input className="input" name="btn" id="value-1" type="radio" />
                <div className="btn">
                    <span aria-hidden="false"></span>Ações
                    <span className="btn__glitch" aria-hidden="false">Ações</span>
                    <label className="number">B3</label>
                </div>
            </div>
            <div onClick={() => goToSearchCriptos(navigate)} className="radio-wrapper">
                <input className="input" name="btn" id="value-2" checked="true" type="radio" />
                <div className="btn">
                    Criptos<span aria-hidden="false"></span>
                    <span className="btn__glitch" aria-hidden="false">Criptos</span>
                    <label className="number">Coin</label>
                </div>
            </div>
            <div className="radio-wrapper">
                <input className="input" name="btn" id="value-3" type="radio" />
                <div className="btn">
                    Cotações<span aria-hidden="false"></span>
                    <span className="btn__glitch" aria-hidden="false">Cotações</span>
                    <label className="number">$</label>
                </div>
            </div>
        </div>
    )
}
export default HomePage