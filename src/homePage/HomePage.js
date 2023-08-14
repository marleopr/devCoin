import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const HomePage = () => {
    const [data, setData] = useState([]);
    // const tickers = 'COGN3,^BVSP';
    // const tickers = 'amer3';
    const [nome, setNome] = useState("")
    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [buttonClicked, setButtonClicked] = useState(false);


    useEffect(() => {
        if (buttonClicked) {
            handleAcoes();
            setButtonClicked(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonClicked]);

    const handleAcoes = async () => {
        // setError(null)
        setLoading(true)
        try {
            // const res = await axios.get(`https://brapi.dev/api/quote/PETR4%2C%5EBVSP?range=1d&interval=1d&fundamental=true&dividends=true`);
            const res = await axios.get(`https://brapi.dev/api/quote/${nome}?range=1d&interval=1d&fundamental=true&dividends=true`);
            setData(res.data.results);
            setLoading(false)
            setNome("")
            console.log(res.data.results);
            // toast.success("Ação pesquisada!")
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
            // toast.error('Error fetching data');
        }
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            notation: 'compact'
        }).format(value);
    };

    const formatDateAndTime = (dateTimeString) => {
        const parsedDate = new Date(dateTimeString);
        return format(parsedDate, "dd/MM/yyyy, HH:mm:ss");
    };
    return (
        <div className="App">
            {/* <ToastContainer /> */}
            <h1>Stocks and Cryptos</h1>
            <div>
                <input type="text" placeholder="Buscar" value={nome.toUpperCase()} onChange={(event) => setNome(event.target.value)} />
                <button onClick={handleAcoes} disabled={!nome}>Buscar</button>
            </div>
            {loading ? (
                <p>Carregando...</p>
            ) : (

                <table>
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Código B3</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Mínimo (dia)</th>
                            <th>Máximo (dia)</th>
                            <th>Valor de mercado</th>
                            <th>Variação</th>
                            <th>Última atualização</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.symbol}>
                                <img src={item.logourl} alt={item.logourl} />
                                <td>{item.symbol}</td>
                                <td>{item.longName}</td>
                                <td>{formatCurrency(item.regularMarketPrice)}</td>
                                <td>{formatCurrency(item.regularMarketDayLow)}</td>
                                <td>{formatCurrency(item.regularMarketDayHigh)}</td>
                                <td>{formatCurrency(item.marketCap)}</td>
                                <td>{formatCurrency(item.regularMarketChange)}
                                    {item.regularMarketChangePercent > 0 ? <p style={{ color: 'green' }}>{item.regularMarketChangePercent.toFixed(2)}%</p> : <p style={{ color: 'red' }}>{item.regularMarketChangePercent.toFixed(2)}%</p>}
                                    {item.regularMarketChange > 0 ? <FaArrowUp style={{ color: 'green', marginLeft: '5px' }} /> : <FaArrowDown style={{ color: 'red', marginLeft: '5px' }} />}
                                </td>
                                <td>{formatDateAndTime(item.regularMarketTime)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default HomePage