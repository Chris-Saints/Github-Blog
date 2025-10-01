import styled from "styled-components";

export const ContainerPerfil = styled.section`
    display: flex;
    justify-content: center;
    gap: 2rem;

    max-width: 54rem;
    width: 100%;
    padding: 2rem 2rem 2rem 2.5rem;
    position: absolute;
    top: 200px;

    border-radius: 10px;
    background: ${props => props.theme['base-profile']};

    img{
        height: 9.25rem;
        width: 9.25rem;
        border-radius: 1rem;
    }

`

export const ContainerPerfilInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 0.5rem;

    p {
        color: ${props => props.theme['base-text']};
        margin-bottom: 1rem;
    }
`


export const PerfilNameLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: ${props => props.theme['base-title']};
    }

    a{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-bottom: 2px;

        border-bottom: 2px solid transparent;

        color: ${props => props.theme['brand-blue']};
        font-weight: bold;

        cursor: pointer;

        &:hover{
            border-bottom: 2px solid ${props => props.theme['brand-blue']};
        }
    }
`


export const PerfilInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
        display: flex;
        align-items: center;
        color: ${props => props.theme['base-subtitle']};
        gap: 0.5rem;
    }

`