import styled from "styled-components";

export const ContainerMainProject = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const ContainerTitulo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 54rem;
    width: 100%;
    padding: 2rem 2rem 2rem 2.5rem;
            position: absolute;
        top: 200px;


    border-radius: 10px;
    background: ${props => props.theme['base-profile']};

    && h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 1.25rem 0 0.5rem;
        color: ${props => props.theme['base-title']};
    }

`

export const NavProjectContainer = styled.div`
    display: flex;
    justify-content: space-between;

    && button {
        border: 0;
        background-color: transparent;
        color: ${props => props.theme['brand-blue']};
        font-size: 12px;
        font-weight: bold;

        display: flex;
        align-items: center;
        border-bottom: 2px solid transparent;
    }


    && a {
        text-decoration: none;
        color: ${props => props.theme['brand-blue']};
        font-size: 12px;
        font-weight: bold;
        border-bottom: 2px solid transparent;
    }

    && a:hover{
        border-bottom: 2px solid ${props => props.theme['brand-blue']};
    }
    
`

export const InfoIssueContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    && div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        color: ${props => props.theme['base-span']};
    }
`

export const ContentIssueContainer = styled.div`
    max-width: 54rem;
    width: 100%;
    display: flex;

    justify-content: start;
    margin: 7rem;
`