import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

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
        <main>
            <h1>{issue.title}</h1>
            <p>
                Por {issue.user.login} * {" "}
                {formatDistanceToNow(new Date(issue.created_at),{
                    addSuffix: true,
                    locale: ptBR,
                })}{" "}
                * {issue.comments} comentários
            </p>

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
            >
                {issue.body}
            </ReactMarkdown>
        </main>
    )
}