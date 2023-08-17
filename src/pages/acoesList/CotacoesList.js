import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { useEffect, useState } from "react"
import CoinLoader from "../../components/CoinLoader"

const CotacoesList = ({ handleCryptoClick }) => {
    const [allDataCrypto, setAllDataCrypto] = useState([])
    const [loadingCotacoes, setLoadingCotacoes] = useState(false)

    useEffect(() => {
        handleAllCrypto()
    }, [])

    const handleAllCrypto = async () => {
        setLoadingCotacoes(true)
        try {
            const res = await axios.get(`${BASE_URL}v2/crypto/available`)
            setAllDataCrypto(res.data.coins)
            setLoadingCotacoes(false)
            // console.log(res.data.coins)
        } catch (error) {
            console.error(error)
            setLoadingCotacoes(false)
        }
    }

    return (
        <div className="acoes-container">
            {loadingCotacoes ? (
                <CoinLoader />
            ) : (
                <div className="acoes-list">
                    {allDataCrypto.map((item, index) => (
                        <div key={index} className="acao-item" onClick={() => handleCryptoClick(item)}>
                            <strong>{item}</strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default CotacoesList