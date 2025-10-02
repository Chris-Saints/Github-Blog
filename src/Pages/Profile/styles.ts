import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerForm = styled.form`
    margin-top: 200px;
    max-width: 54rem;
    width: 100%;
    margin-bottom: 3rem;


    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.9rem;

        h2{
            font-size: 18px;
        }

        span {
            color: ${props => props.theme['base-span']};
            font-size: 14px;
        }
    }

    input{
        width: 100%;
        background: ${props => props.theme['base-input']};
        border: 1px solid ${props =>  props.theme['base-border']};
        padding: 1rem;
        border-radius: 8px;
    }
`

export const ContainerConteudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    max-width: 54rem;
    width: 100%;

    flex-wrap: wrap;

    margin-bottom: 14.6rem;
`