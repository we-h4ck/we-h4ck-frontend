import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    background-color: ${({ theme }) => theme.mainColors.mainBlue};

    display: flex;
    align-items: center;
`;

export const Center = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;
