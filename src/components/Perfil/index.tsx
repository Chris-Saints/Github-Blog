import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ContainerPerfil, ContainerPerfilInfo, PerfilInfo, PerfilNameLink } from "./styles";
import { useEffect} from "react";
import type { GitHubUserProfile } from "../../utils/utils";





interface PerfilProps {
    profile: GitHubUserProfile
}


export function Perfil({profile}: PerfilProps) {

    
    

    useEffect(() => {
        async function fetchProfile() {
            

        }

        fetchProfile()
    }, [])

    if (!profile) {
        return <p>Carregando perfil...</p>
    }

    return (
        <ContainerPerfil>
            
            <img src={profile.avatar_url} alt="Foto de Perfil"/>

            <ContainerPerfilInfo>
                <PerfilNameLink>
                    <h1>{profile.name}</h1>

                    <a href="https://github.com/Chris-Saints">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#3294F8"}}/></a>
                </PerfilNameLink>

                <p>{profile.bio}</p>
            
                <PerfilInfo>
                    <span>
                        <FontAwesomeIcon icon={faGithub} style={{color: "#3A536B", height: '18px'}}/>
                        {profile.login}
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faBuilding} style={{color: "#3A536B", height: '18px'}}/>
                        {profile.company}
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faUserGroup} style={{color: "#3A536B", height: '18px'}}/>
                        {profile.followers === 1 ? `${profile.followers} seguidor` : `${profile.followers} seguidores`}
                    </span>
                </PerfilInfo>
            </ContainerPerfilInfo>

        </ContainerPerfil>
    )
}