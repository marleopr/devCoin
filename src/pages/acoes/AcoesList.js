import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { useEffect, useState } from "react"
import CoinLoader from "../../components/CoinLoader"

const AcoesList = ({ handleAcoesClick }) => {
    const [allData, setAllData] = useState([])
    const [loadingList, setLoadingList] = useState(false)

    useEffect(() => {
        handleAllAcoes()
    }, [])

    const handleAllAcoes = async () => {
        setLoadingList(true)
        try {
            const res = await axios.get(`${BASE_URL}available`)
            setAllData(res.data.stocks)
            setLoadingList(false)
        } catch (error) {
            console.error(error)
            setLoadingList(false)
        }
    }

    return (
        <div className="acoes-container">
            {loadingList ? (
                <CoinLoader />
            ) : (
                <div className="acoes-list">
                    {allData.map((item, index) => (
                        <div key={index} className="acao-item" onClick={() => handleAcoesClick(item)}>
                            <strong>{item}</strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default AcoesList