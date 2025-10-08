import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ContainerPerfil, ContainerPerfilInfo, PerfilInfo, PerfilNameLink } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";



interface ProfileData {
    name: string
    bio: string
    login: string
    company: string
    followers: number
    avatar_url: string
}


export function Perfil() {

    const [profile, setProfile] = useState<ProfileData | null>(null)

    useEffect(() => {
        async function fetchProfile() {
            const response = await axios.get("https://api.github.com/users/Chris-Saints")
            setProfile(response.data)
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
                        {profile.followers} seguidores
                    </span>
                </PerfilInfo>
            </ContainerPerfilInfo>

        </ContainerPerfil>
    )
}