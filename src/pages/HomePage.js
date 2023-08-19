import SquareLoader from "../components/SquareLoader"
import RadioButtons from "../components/RadioButtons"
import EasterEgg from "../components/EasterEgg"
const HomePage = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "100%", marginTop: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
            <RadioButtons />
            <EasterEgg />
            <div style={{ marginTop: '50px' }}>
                <SquareLoader />
            </div>
        </div>
    )
}
export default HomePage
