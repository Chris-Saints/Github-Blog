import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"
import { ContainerMainProject, ContainerTitulo, ContentIssueContainer, InfoIssueContainer, NavProjectContainer } from "./styles"
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../../components/Header"


interface IssueData {
    title: string
    body: string
    created_at: string
    comments: number
    user: {
        login: string
    }
}


export function Project () {

    const { issueNumber } = useParams() //Para pegar o numero da issue, definida na rota

    const [issue, setIssue] = useState<IssueData | null>(null) //Armazena todo o dado requisitado da api na issue


    useEffect(() => {
        async function fetchIssue() {
            const response = await axios.get(
                `https://api.github.com/repos/Chris-Saints/Github-Blog/issues/${issueNumber}` //Aqui, você faz a requisição à API do GitHub e guarda o retorno no estado issue.
            )
            setIssue(response.data)
        }

        fetchIssue()
    }, [issueNumber])

    if (!issue) {
        return <p>Carregando post...</p>
    }

    return(
        <ContainerMainProject>
            <Header />
            <ContainerTitulo>
                <NavProjectContainer>
                    <NavLink to={"/"}><button><FontAwesomeIcon icon= {faAngleLeft} />VOLTAR</button></NavLink>
                    <a href="https://github.com/Chris-Saints">VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </NavProjectContainer>

                <h1>{issue.title}</h1>
 
                <InfoIssueContainer>   
                    <div><FontAwesomeIcon icon={faGithub} /> {issue.user.login}</div> 
                    
                    <div><FontAwesomeIcon icon={faCalendarDay}/> {formatDistanceToNow(new Date(issue.created_at),{
                        addSuffix: true,
                        locale: ptBR,
                    })}</div>

                    <div><FontAwesomeIcon icon={faComment} /> <p>{issue.comments} comentários</p></div>
                </InfoIssueContainer>
              
            </ContainerTitulo>

            <ContentIssueContainer>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                    {issue.body}
                </ReactMarkdown>
            </ContentIssueContainer>
            
        </ContainerMainProject>
    )
}