import { styled } from "styled-components";
import devCoinLogo from "../assets/devCoin logo bit.png"
import DownloadButton from "./DownloadButton";
import { goToHomePage } from "../routes/Cordinator";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div style={{ cursor: "pointer" }} onClick={() => goToHomePage(navigate)}>
                <ImgLogo src={devCoinLogo} />
            </div>
            <DownloadButton />
        </div>
    )
}
export default Header;

const ImgLogo = styled.img`
    width: 250px;
    margin: 10px;
`