import styled from "styled-components";

export const Button = styled.button`
    border: none;
    width: 300px;
    margin: 10px;
    padding: 10px 40px 10px 40px;
    border-radius: 10px;

    font-family: "Open sans", "sans-serif";
    font-weight: 600;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h1 {
        font-family: "Open sans", "sans-serif";
        font-size: 2.5rem;
    }
`;
