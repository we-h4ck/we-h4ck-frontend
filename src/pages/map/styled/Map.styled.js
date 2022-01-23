import { Link } from "react-router-dom";
import styled from "styled-components";

export const MapContainer = styled.div`
    overflow: hidden;

    span {
        font-weight: 600;
    }
`;

export const ModalIcon = styled.i`
    color: grey;
    font-size: 1rem;
`;

export const Button = styled.button`
    position: absolute;
    bottom: 15px;

    @media screen and (min-width: 768px) {
        left: 30px;
    }

    @media screen and (max-width: 767px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    background-color: ${({ theme }) => theme.mainColors.secondaryGreen};
    border: none;
    color: white;
    text-decoration: none;
    text-align: center;

    padding: 15px 40px 15px 40px;
    border-radius: 5px;

    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    width: 350px;

    cursor: pointer;
`;

export const HomeButton = styled(Link)`
    position: absolute;
    top: 15px;
    right: 15px;

    color: ${({ theme }) => theme.mainColors.secondaryGreen};

    font-size: 2rem;
    border: 3px solid ${({ theme }) => theme.mainColors.secondaryGreen};
    padding: 10px;
    border-radius: 100px;
`;
