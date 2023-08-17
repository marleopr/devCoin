import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../constants/BASE_URL";
import CardAcoes from "../../components/CardAcoes";
import AcoesList from "../acoesList/AcoesList";
import SquareLoader from "../../components/SquareLoader";
import CoinLoader from "../../components/CoinLoader";
import { goToHomePage } from "../../routes/Cordinator";
import { useNavigate } from "react-router-dom";

const SearchAcoes = () => {
    const navigate = useNavigate()

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
            const res = await axios.get(`${BASE_URL}quote/${nome}?range=1d&interval=1d&fundamental=true&dividends=true`);
            setData(res.data.results);
            setLoading(false)
            setNome("")
            // console.log(res.data.results);
            toast.success("Ação encontrada!")
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
            toast.error('Ação não encontrada!');
        }
    };

    const handleAcoesClick = async (selectedItem) => {
        setLoading(true);
        try {
            const res = await axios.get(`${BASE_URL}quote/${selectedItem}?range=1d&interval=1d&fundamental=true&dividends=true`);
            setData(res.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    };

    return (
        <div className="App">
            <ToastContainer />
            <h2 style={{ color: 'white', textShadow: '-1px 0 black, 0 1px #0a95ff, 1px 0 #ff0000, 0 -1px black', letterSpacing: '3px' }}>Ações</h2>
            <AcoesList handleAcoesClick={handleAcoesClick} />
            <div>
                <input type="text" placeholder="Buscar" value={nome.toUpperCase()} onChange={(event) => setNome(event.target.value)} />
                <button onClick={handleAcoes} disabled={!nome}>Buscar</button>
                <button onClick={() => goToHomePage(navigate)} >Voltar</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                {loading ? (
                    <CoinLoader />
                ) : (
                    data && data.length > 0 ? (
                        <CardAcoes data={data} />
                    ) : (
                        <SquareLoader />
                    )
                )}
            </div>
        </div>
    );
}
export default SearchAcoes