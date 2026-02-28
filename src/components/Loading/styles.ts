import styled, { keyframes } from "styled-components"

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 28.12rem;

    gap: 0.5rem;
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const AnimationLogoLoading = styled.div`
    animation: ${rotate} 1s linear infinite;
`;