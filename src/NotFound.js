/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    font-family: "Open sans", "sans-serif";
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.mainColors.mainGreen};

    h1 {
        margin: 0px;
        font-family: inherit;
        font-weight: medium;
        font-size: 4.25rem;
    }

    p {
        color: #1b4332;
        margin: 25px 0 45px 0;
        font-family: inherit;
        font-weight: normal;
        font-size: 1.5rem;
        text-align: center;
    }

    a {
        color: #b7e4c7;
        text-decoration: none;
        font-size: 1.25rem;
        text-align: center;
    }
`;

const NotFound = () => {
    return (
        <Container>
            <h1>Oops!</h1>
            <p>We can't seem to find the page you're looking for...</p>

            <Link to="/">Come back to a safer place</Link>
        </Container>
    );
};

export default NotFound;
