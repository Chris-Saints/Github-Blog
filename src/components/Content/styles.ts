import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerConteudo = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    text-decoration: none;

    border: none;
    border-radius: 10px;
    height: 16.25rem;
    width: 26rem;
    transition: transform 0.2s;
    


    background: ${props => props.theme['base-post']};

    p{
        text-align: start;
        color: ${props => props.theme['base-text']};
        line-height: 1.7;
    }

    &:hover {
        transform: scale(1.1);
    }
`

export const ContainerTitle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;

    width: 100%;
    text-align: start;

    margin-bottom: 1.25rem;

    h2{
        width: 70%;
        color: ${props => props.theme['base-title']};
        font-size: 20px;
    }

    span{
        height: 100%;
        color: ${props => props.theme['base-span']};
        font-size: 14px;
    }
`

export const ContentContainer = styled.div`
    width: 300px;                /* Define o tamanho máximo (pode ser % ou px) */
    white-space: wrap;         /* Impede que o texto quebre para a próxima linha */
    overflow: hidden;            /* Esconde o texto que sai de fora da div */
    text-overflow: ellipsis;     /* Adiciona "..." no final */

`