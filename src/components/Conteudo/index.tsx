import { formatDistanceToNow } from "date-fns";
import type { GitHubIssue } from "../../utils/utils";
import { ContainerConteudo, ContainerTitle } from "./styles";
import { ptBR } from "date-fns/locale/pt-BR"

interface ContentProps {
    issues: GitHubIssue
}

export function Content({issues}: ContentProps) {

    if(!issues) {
        return <div>Carregando...</div>
    }
    return (
        <ContainerConteudo to={`/post/${issues.number}`}>
            <ContainerTitle>
                <h2>{issues.title}</h2>

                <span>
                    {formatDistanceToNow(new Date(issues.created_at),{
                        addSuffix: true,
                        locale: ptBR,
                    })}
                </span>
            </ContainerTitle>

            <p>{issues.body}</p>
        </ContainerConteudo>
    )
}