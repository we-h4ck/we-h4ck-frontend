import styled, { keyframes } from "styled-components";

export const PopupContainer = styled.div`
    position: absolute;
    height: 400px;
    width: 300px;
    border-radius: 15px;

    background-color: white;
    color: black;
    font-family: "Open sans", "sans-serif";

    padding: 25px 25px 0 25px;

    top: 30%;
    left: 30px;
`;
export const Box = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    span {
        color: red;
    }

    h1 {
        text-align: center;
    }

    p {
        font-weight: 600;
    }

    input {
        width: 100%;
        background-color: rgba(210, 210, 210, 0.5);
        border: none;
        outline: none;
        padding: 10px 0 10px 0;
    }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Fade = styled.div`
    display: block;

    visibility: ${(props) => (!props.out ? "hidden" : "visible")};
    animation: ${(props) => (!props.out ? fadeOut : fadeIn)} 0.15s linear;
    transition: all 0.15s linear;
`;

export const Button = styled.button`
    position: absolute;
    bottom: 15px;
    left: 30px;

    background-color: ${({ theme }) => theme.mainColors.mainGreen};
    border: none;
    color: white;
    text-decoration: none;
    text-align: center;

    padding: 5px 40px 5px 40px;
    border-radius: 5px;

    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    width: 200px;

    cursor: pointer;
`;
