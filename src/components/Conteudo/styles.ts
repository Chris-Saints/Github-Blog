import styled from "styled-components";

export const ContainerConteudo = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    gap: 1.25rem;

    border: none;
    border-radius: 10px;
    height: 16.25rem;
    width: 26rem;


    background: ${props => props.theme['base-post']};

    p{
        text-align: start;
        color: ${props => props.theme['base-text']};
        line-height: 1.7;
    }
`

export const ContainerTitle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-align: start;

    h2{
        width: 70%;
        color: ${props => props.theme['base-title']};
        font-size: 20px;
    }

    span{
        color: ${props => props.theme['base-span']};
        font-size: 14px;
    }
`