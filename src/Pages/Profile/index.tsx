import { Conteudo } from "../../components/Conteudo";
import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { ContainerForm, ContainerMain } from "./styles";

export function Profile() {
    return (
        <ContainerMain>
            <Header />
            <Perfil />
            <ContainerForm>
                <div>
                    <h2>Publicações</h2>
                    <span> 6 publicações</span>
                </div>

                <input type="text" placeholder="Buscar conteúdo " />
            </ContainerForm>

            <Conteudo />
        </ContainerMain>
    )
}