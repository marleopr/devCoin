import { styled } from "styled-components";
import { FaArrowDown, FaArrowUp, FaFlag } from "react-icons/fa";
import USD from '../assets/estados-unidos.png'
import EUR from '../assets/uniao-europeia.png'
import GBP from '../assets/reino-unido.png'

const CardCotacoes = ({ dataCotacoes }) => {

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            notation: 'standard'
        }).format(value);
    };

    const formatDateAndTime = (timestamp) => {
        const parsedDate = new Date(timestamp * 1000);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = parsedDate.toLocaleDateString('pt-BR', options);
        return formattedDate;
    };

    const getFlag = (fromCurrency) => {
        const flagDict = {
            'USD': USD,
            'EUR': EUR,
            'GBP': GBP,
        }
        return flagDict[fromCurrency] || <FaFlag />
    }

    return (
        <>
            <Main>
                {dataCotacoes.map((item) => (
                    <div key={item.symbol} className="card">
                        <div className="top-section">
                            <div className="border"></div>
                            <div className="icons">
                                <div className="logo">
                                    <img style={{ borderRadius: '20%', width: '50px' }} src={getFlag(item.fromCurrency)} alt={item.fromCurrency} />
                                    <h6>{formatDateAndTime(item.updatedAtTimestamp)}</h6>
                                </div>
                                <div className="data-container">
                                    <div className="symbol">
                                        <strong>{item.fromCurrency}</strong>
                                    </div>
                                    <div className="market-cap">
                                        <h5>Preço de compra: {formatCurrency(item.bidPrice)}</h5>
                                    </div>
                                    <div className="variation">
                                        <h5>Variação (dia):
                                            <span style={{ margin: '5px' }}>
                                                {formatCurrency(item.bidVariation)}
                                            </span>
                                            {item.percentageChange > 0 ? <span className="green">{item.percentageChange}%</span> : <span className="red">{item.percentageChange}%</span>}
                                            {item.bidVariation > 0 ? <FaArrowUp className="green-arrow" /> : <FaArrowDown className="red-arrow" />}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <span className="title">{item.name}</span>
                            <div className="row row1">
                                <div className="item">
                                    <span className="big-text">{formatCurrency(item.askPrice)}</span>
                                    <span className="regular-text">Preço de venda</span>
                                </div>
                                <div className="item">
                                    <span className="big-text">{formatCurrency(item.low)}</span>
                                    <span className="regular-text">Mínimo (dia)</span>
                                </div>
                                <div className="item">
                                    <span className="big-text">{formatCurrency(item.high)}</span>
                                    <span className="regular-text">Máximo (dia)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Main>
        </>
    )
}
export default CardCotacoes

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    @media screen and (max-device-width: 480px) {
    flex-direction: column;
  }
`