import axios from "axios";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import { BASE_URL } from "../../constants/BASE_URL";
import CardCripto from "../../components/CardCripto";
import Cripto from "../acoes/Cripto";

const HomePageCripto = () => {
    const [dataCrypto, setDataCrypto] = useState([]);
    // const tickers = 'COGN3,^BVSP';
    // const tickers = 'amer3';
    const [nomeCrypto, setNomeCrypto] = useState("")
    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const [buttonClickedCrypto, setButtonClickedCrypto] = useState(false);


    useEffect(() => {
        if (buttonClickedCrypto) {
            handleCrypto();
            setButtonClickedCrypto(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonClickedCrypto]);

    const handleCrypto = async () => {
        // setError(null)
        setLoading(true)
        try {
            const res = await axios.get(`${BASE_URL}v2/crypto?coin=${nomeCrypto}&currency=BRL`);
            setDataCrypto(res.data.coins);
            setLoading(false)
            setNomeCrypto("")
            console.log(res.data);
            // toast.success("Ação pesquisada!")
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
            // toast.error('Error fetching data');
        }
    };

    const handleCryptoClick = async (selectedItemCrypto) => {
        setLoading(true);
        try {
            const res = await axios.get(`${BASE_URL}v2/crypto?coin=${selectedItemCrypto}&currency=BRL`);
            setDataCrypto(res.data.coins);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    return (
        <div className="App">
            {/* <ToastContainer /> */}
            <h1>Cryptos</h1>
            <Cripto handleCryptoClick={handleCryptoClick} />
            <div>
                <input type="text" placeholder="Buscar" value={nomeCrypto.toUpperCase()} onChange={(event) => setNomeCrypto(event.target.value)} />
                <button onClick={handleCrypto} disabled={!nomeCrypto}>Buscar</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', border: 'solid 1px green' }}>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    dataCrypto && dataCrypto.length > 0 ? (
                        <CardCripto dataCrypto={dataCrypto} />
                    ) : (
                        <p>Adicionar alguma coisa</p>
                    )
                )}
            </div>
        </div>
    );
}
export default HomePageCripto