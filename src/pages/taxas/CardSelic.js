import { styled } from "styled-components";
import BR from '../../assets/bandeira-do-brasil.png'

const CardSelic = ({ dataSelic }) => {

    return (
        <>
            <Main>
                {dataSelic.map((item, index) => (
                    <div key={index} className="card">
                        <div className="top-section">
                            <div className="border"></div>
                            <div className="icons">
                                <div className="logo">
                                    <img style={{ borderRadius: '20%', width: '50px' }} src={BR} alt="Bandeira Brasil" />
                                    <h6>{item.date}</h6>
                                </div>
                                <div className="data-container">
                                    <div className="symbol">
                                        <strong>Selic</strong>
                                    </div>
                                    <div className="market-cap">
                                        <h5>Valor da taxa Selic hoje: <br></br> <br></br>{item.value}%</h5>
                                    </div>
                                    <div className="variation">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <span className="title">Brasil</span>
                        </div>
                    </div>
                ))}
            </Main>
        </>
    )
}
export default CardSelic

const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    @media screen and (max-device-width: 480px) {
    flex-direction: column;
  }
`