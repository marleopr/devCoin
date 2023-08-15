import axios from "axios"
import { BASE_URL } from "../../constants/BASE_URL"
import { useEffect, useState } from "react"

const Acoes = ({ handleAcoesClick }) => {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        handleAllAcoes()
    }, [])

    const handleAllAcoes = async () => {
        try {
            const res = await axios.get(`${BASE_URL}available`)
            setAllData(res.data.stocks)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div style={{ width: '100vw', border: '1px solid red', height: '100px', overflow: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', textAlign: 'center' }}>
                {allData.map((item, index) => (
                    <div key={index} onClick={() => handleAcoesClick(item)} >
                        <strong>{item}</strong>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Acoes