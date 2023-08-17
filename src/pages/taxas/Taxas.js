import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../constants/BASE_URL";
import SquareLoader from "../../components/SquareLoader";
import CoinLoader from "../../components/CoinLoader";
import { goToHomePage } from "../../routes/Cordinator";
import { useNavigate } from "react-router-dom";
import CardTaxas from "../../components/CardTaxas";
import CardSelic from "../../components/CardSelic";

const Taxas = () => {
    const navigate = useNavigate()

    const [dataTaxas, setDataTaxas] = useState([]);
    const [dataSelic, setDataSelic] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        handleTaxas()
        handleSelic()
    }, [])

    const handleTaxas = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URL}v2/inflation?country=brazil&historical=false&sortBy=date&sortOrder=desc`);
            setDataTaxas(res.data.inflation);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    };
    const handleSelic = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URL}v2/prime-rate?country=brazil&historical=false&sortBy=date&sortOrder=desc`);
            setDataSelic(res.data['prime-rate']);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
    };

    return (
        <div className="App">
            <h2 style={{ color: 'white', textShadow: '-1px 0 black, 0 1px #0a95ff, 1px 0 #ff0000, 0 -1px black', letterSpacing: '3px' }}>Taxas</h2>
            <div>
                <button onClick={() => goToHomePage(navigate)} >Voltar</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                {loading ? (
                    <CoinLoader />
                ) : (
                    dataTaxas && dataTaxas.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CardTaxas dataTaxas={dataTaxas} />
                            <CardSelic dataSelic={dataSelic} />
                        </div>
                    ) : (
                        <SquareLoader />
                    )
                )}
            </div>
        </div>
    );
}
export default Taxas