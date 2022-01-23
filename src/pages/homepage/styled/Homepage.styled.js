import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomepageContainer = styled.div`
    font-family: "Open Sans", sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 992px) and (max-width: 1199px) {
        flex-direction: column;
        align-items: center;

        .left {
            margin: 0 0 50px 0 !important;
        }
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;

        div {
            height: 100%;
        }

        @media screen and (min-width: 992px) {
            margin: 0 35px 0px 35px;
        }

        @media screen and (max-width: 991px) {
            margin: 50px;
        }
    }

    .right {
        margin: 0 35px 0 35px;

        img {
            width: 35rem;
        }
    }

    span {
        color: ${({ theme }) => theme.mainColors.secondaryGreen};
    }

    h1 {
        font-weight: 500;
        font-size: 3rem;

        line-height: 55px;
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .warning {
        font-size: 0.75rem;
        margin: 10px 50px 10px 50px;

        @media screen and (min-width: 992px) {
            margin: 20px 35px 0 35px;
        }

        align-self: left;
    }
`;

export const Button = styled(Link)`
    background-color: ${({ theme }) => theme.mainColors.secondaryGreen};
    border: none;
    color: white;
    text-decoration: none;
    text-align: center;

    padding: 15px 40px 15px 40px;
    margin: 15px 15px 15px 0;
    border-radius: 5px;

    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    max-width: 150px;

    cursor: pointer;
`;
