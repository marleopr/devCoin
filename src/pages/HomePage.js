import { useNavigate } from "react-router-dom"
import { goToCotacoes, goToSearchAcoes, goToSearchCriptos } from "../routes/Cordinator"
import SquareLoader from "../components/SquareLoader"

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "100%", marginTop: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
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
                    <input className="input" name="btn" id="value-2" type="radio" />
                    <div className="btn selected-btn">
                        Criptos<span aria-hidden="false"></span>
                        <span className="btn__glitch" aria-hidden="false">Criptos</span>
                        <label className="number">Coin</label>
                    </div>
                </div>
                <div onClick={() => goToCotacoes(navigate)} className="radio-wrapper">
                    <input className="input" name="btn" id="value-3" type="radio" />
                    <div className="btn">
                        Cotações<span aria-hidden="false"></span>
                        <span className="btn__glitch" aria-hidden="false">Cotações</span>
                        <label className="number">$</label>
                    </div>
                </div>
                <div onClick={() => goToCotacoes(navigate)} className="radio-wrapper">
                    <input className="input" name="btn" id="value-4" type="radio" />
                    <div className="btn selected-btn">
                        Taxas<span aria-hidden="false"></span>
                        <span className="btn__glitch" aria-hidden="false">Inflação</span>
                        <label className="number">$</label>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <SquareLoader />
            </div>
        </div>
    )
}
export default HomePage