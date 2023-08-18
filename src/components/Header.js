import { styled } from "styled-components";
import devCoinLogo from "../assets/devCoin logo bit.png"
import DownloadButton from "./DownloadButton";
const Header = () => {

    const handleReloadHomePage = () => {
        window.location.reload();
    };

    return (
        <div>
            <div style={{ cursor: "pointer" }} onClick={() => handleReloadHomePage()}>
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