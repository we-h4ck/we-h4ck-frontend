import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
    border: none;
    width: 300px;
    margin: 10px;
    padding: 20px 40px 20px 40px;
    border-radius: 10px;

    font-family: "Open sans", "sans-serif";
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

export const RedirectHome = styled(Link)`
    font-family: "Open sans", "sans-serif";
    margin-top: 25px;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 10px 25px 10px 25px;
    border: 2px solid white;
    border-radius: 10px;
`;
