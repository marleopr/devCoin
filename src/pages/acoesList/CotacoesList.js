import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { useEffect, useState } from "react"

const CotacoesList = ({ handleCryptoClick }) => {
    const [allDataCrypto, setAllDataCrypto] = useState([])

    useEffect(() => {
        handleAllCrypto()
    }, [])

    const handleAllCrypto = async () => {
        try {
            const res = await axios.get(`${BASE_URL}v2/crypto/available`)
            setAllDataCrypto(res.data.coins)
            // console.log(res.data.coins)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="acoes-container">
            <div className="acoes-list">
                {allDataCrypto.map((item, index) => (
                    <div key={index} className="acao-item" onClick={() => handleCryptoClick(item)}>
                        <strong>{item}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CotacoesList