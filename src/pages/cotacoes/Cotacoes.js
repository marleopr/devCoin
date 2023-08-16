import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../constants/BASE_URL";
import SquareLoader from "../../components/SquareLoader";
import CoinLoader from "../../components/CoinLoader";
import { goToHomePage } from "../../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import CardCotacoes from "../../components/CardCotacoes";

const Cotacoes = () => {
    const navigate = useNavigate()

    const [dataCotacoes, setDataCotacoes] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        handleCotacoes()
    }, [])

    const handleCotacoes = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URL}v2/currency?currency=USD-BRL%2CEUR-BRL%2CGBP-BRL`);
            setDataCotacoes(res.data.currency);
            setLoading(false)
            // console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    };

    return (
        <div className="App">
            <h2 style={{ color: 'white', textShadow: '-1px 0 black, 0 1px #0a95ff, 1px 0 #ff0000, 0 -1px black', letterSpacing: '3px' }}>Cotações</h2>
            <div>
                <buton onClick={() => goToHomePage(navigate)} >Voltar</buton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                {loading ? (
                    <CoinLoader />
                ) : (
                    dataCotacoes && dataCotacoes.length > 0 ? (
                        <CardCotacoes dataCotacoes={dataCotacoes} />
                    ) : (
                        <SquareLoader />
                    )
                )}
            </div>
        </div>
    );
}
export default Cotacoes