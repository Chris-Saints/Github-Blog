import styled from "styled-components";
import Fundo from "../../assets/Cover.svg"

export const Banner = styled.div`
    background-image: url(${Fundo});
    width: 100%;
    height: 296px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;

    img{
        height: 98px;
        margin-top: 4rem;
    }
`