import axios from "axios";
import { Content } from "../../components/Conteudo";
import { Header } from "../../components/Header";
import { Perfil } from "../../components/Perfil";
import { ContainerConteudo, ContainerForm, ContainerMain } from "./styles";
import { useEffect, useState } from "react";
import type { GitHubIssue, GitHubUserProfile } from "../../utils/utils";
import { fetchIssues, searchIssues } from "../../services/api";
import { Loading } from "../../components/Loading";

export function Profile() {

    const [issues, setIssues] = useState<GitHubIssue[]>([])
    const [profile, setProfile] = useState<GitHubUserProfile | null>(null)
    const [query, setQuery] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function fetchProfile() {
            setLoading(true)
            const user = "Chris-Saints"
            const response = await axios.get(`https://api.github.com/users/${user}`)
            setProfile(response.data)

            const freshIssues = await fetchIssues(user,"Github-Blog");

            setIssues(freshIssues)
            setLoading(false)
        }

        fetchProfile()
    },[])

    useEffect(() => {
        let isCancelled = false //Para evitar corrida de requisição

        async function searchingIssues() {
            const trimmed = query.trim()

            if(trimmed === "") {
                const freshIssues = await fetchIssues("Chris-Saints", "Github-Blog")
                setIssues(freshIssues)
                return
            }

            if(trimmed.length < 3) {
                return
            }

            const searchedIssues = await searchIssues(trimmed, "Chris-Saints", "Github-Blog")
            if(!isCancelled) setIssues(searchedIssues)

        }

        searchingIssues()

        return () => { isCancelled = true}
        
    },[query])

    async function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <ContainerMain>
            <Header />

            {loading && <Loading />}

            {profile && <>
            
            <Perfil profile={profile} />
            
            <ContainerForm>
                <div>
                    <h2>Publicações</h2>
                    <span> {profile.public_repos === 1 ? `${profile.public_repos} publicação` : `${profile.public_repos} publicações`}</span>
                </div>

                <input value={query} type="text" onChange={handleOnChange} placeholder="Buscar conteúdo " />
            </ContainerForm>

            <ContainerConteudo>

                {issues && issues.map(item => {

                        return <Content key={item.id} issues={item} />
                    })
                }

            </ContainerConteudo>

            </>}

        </ContainerMain>
    )
}