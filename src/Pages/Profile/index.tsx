import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { ContainerMain } from "./styles";

export function Profile() {
    return (
        <ContainerMain>
            <Header />
            <Perfil />
        </ContainerMain>
    )
}