import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Assustador  from "../../assets/assustador.jpeg"
import { ContainerPerfil, ContainerPerfilInfo, PerfilInfo, PerfilNameLink } from "./styles";

export function Perfil() {
    return (
        <ContainerPerfil>
            
            <img src={Assustador}/>

            <ContainerPerfilInfo>
                <PerfilNameLink>
                    <h1>Christian Picoli</h1>

                    <a>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#3294F8"}}/></a>
                </PerfilNameLink>

                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            
                <PerfilInfo>
                    <span>
                        <FontAwesomeIcon icon={faGithub} style={{color: "#3A536B", height: '18px'}}/>
                        Chris-Saint
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faBuilding} style={{color: "#3A536B", height: '18px'}}/>
                        Rocketseat
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faUserGroup} style={{color: "#3A536B", height: '18px'}}/>
                        10 seguidores
                    </span>
                </PerfilInfo>
            </ContainerPerfilInfo>

        </ContainerPerfil>
    )
}