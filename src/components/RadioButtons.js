import { useNavigate } from "react-router-dom"
import { goToCotacoes, goToSearchAcoes, goToSearchCriptos } from "../routes/Cordinator"

const RadioButtons = () => {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>

            <label onClick={() => goToSearchAcoes(navigate)} id="topleft" className="container">
                <input name="my-radio-button" type="radio" />
                <label id="tl"> <br />Ações</label>
                <div className="selected"></div>
            </label>
            &nbsp;
            <label onClick={() => goToSearchCriptos(navigate)} id="topright" className="container">
                <input name="my-radio-button" type="radio" />
                <label id="tr"><br />Criptos</label>
                <div className="selected"></div>
            </label>
            <br>
            </br>
            <label onClick={() => goToCotacoes(navigate)} id="bottomleft" className="container">
                <input name="my-radio-button" type="radio" />
                <label id="bl"> <br />Cotações</label>
                <div className="selected"></div>
            </label>
            &nbsp;
            <label onClick={() => goToCotacoes(navigate)} id="bottomright" className="container">
                <input name="my-radio-button" type="radio" />
                <label id="br"> <br />Taxas</label>
                <div className="selected"></div>
            </label>
        </div>
    )
}
export default RadioButtons