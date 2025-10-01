import { Banner } from "./styles";
import Logo from "../../assets/Logo.svg"

export function Header () {
    return (
        <Banner>
            <img src={Logo} />
        </Banner>
    )
}