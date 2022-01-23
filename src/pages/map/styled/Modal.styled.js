import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    width: 400px;
    height: 580px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    z-index: 10;
    border-radius: 10px;
    font-family: "Open sans", "sans-sérif";

    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        margin: 0;
    }

    .fields {
        display: flex;
        flex-direction: column;
        margin: 0 25px 0 25px;
        width: 100%;
    }

    .field {
        p {
            margin-bottom: 10px;
        }

        input {
            font-family: "Open sans", "sans-serif";
            width: calc(100% - 75px);
        }
    }

    .date-field {
        input {
            border: none;
            background: rgba(0, 0, 0, 0.1);
            outline: none;
            font-family: "Open sans", "sans-serif";
            border-radius: 5px;
            padding: 7px;
            color: black;
        }
    }

    .text-field {
        input {
            background: rgba(0, 0, 0, 0.1);
            border: none;
            color: black;
            border-radius: 5px;
            padding: 10px;
        }
    }

    .dropdown-field {
        select {
            background: rgba(0, 0, 0, 0.1);
            border: none;
            color: black;
            border-radius: 5px;
            padding: 10px;
            width: calc(100% - 55px);
        }
    }

    .required {
        color: red;
    }

    .cross {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: relative;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const Button = styled.button`
    border: none;
    font-family: "Open sans", "sans-serif";
    font-size: 1rem;
    padding: 8px 60px 8px 60px;
    margin-top: 25px;
    border-radius: 5px;

    background-color: ${props => (props.error === 0 ? "#40916c" : "red")};

    color: white;

    width: 200px;
    justify-self: center;
    align-self: center;

    cursor: pointer;
`;
