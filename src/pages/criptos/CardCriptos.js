import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const CardCriptos = ({ dataCrypto }) => {

    const formatCurrency = (value, notation = 'standard') => {
        const options = {
            style: 'currency',
            currency: 'BRL',
            notation: notation
        };

        return new Intl.NumberFormat('pt-BR', options).format(value);
    };

    const formatDateAndTime = (timestamp) => {
        const parsedDate = new Date(timestamp * 1000); // Convertendo para milissegundos
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedDate = parsedDate.toLocaleDateString('pt-BR', options); // Formatando para string legível
        return formattedDate;
    };

    return (
        <>
            {dataCrypto.map((item, index) => (
                <div key={index} className="card">
                    <div className="top-section">
                        <div className="border"></div>
                        <div className="icons">
                            <div className="logo">
                                <img style={{ borderRadius: '20%', width: '50px' }} src={item.coinImageUrl} alt={item.coinImageUrl} />
                                <h6>{formatDateAndTime(item.regularMarketTime)}</h6>
                            </div>
                            {/* <div className="social-media"> */}
                            <div className="data-container">
                                <div className="symbol">
                                    <strong>{item.coin}</strong>
                                </div>
                                <div className="market-cap">
                                    <h5>Valor de mercado: {formatCurrency(item.marketCap, 'compact')}</h5>
                                </div>
                                <div className="variation">
                                    <h5>Variação (dia):
                                        <span style={{ margin: '5px' }}>
                                            {formatCurrency(item.regularMarketChange)}
                                        </span>
                                        {item.regularMarketChangePercent > 0 ? <span className="green">{item.regularMarketChangePercent.toFixed(2)}%</span> : <span className="red">{item.regularMarketChangePercent.toFixed(2)}%</span>}
                                        {item.regularMarketChange > 0 ? <FaArrowUp className="green-arrow" /> : <FaArrowDown className="red-arrow" />}
                                    </h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-section">
                        <span className="title">{item.coinName}</span>
                        <div className="row row1">
                            <div className="item">
                                <span className="big-text">{formatCurrency(item.regularMarketPrice)}</span>
                                <span className="regular-text">Preço</span>
                            </div>
                            <div className="item">
                                <span className="big-text">{formatCurrency(item.regularMarketDayLow)}</span>
                                <span className="regular-text">Mínimo (dia)</span>
                            </div>
                            <div className="item">
                                <span className="big-text">{formatCurrency(item.regularMarketDayHigh)}</span>
                                <span className="regular-text">Máximo (dia)</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default CardCriptos