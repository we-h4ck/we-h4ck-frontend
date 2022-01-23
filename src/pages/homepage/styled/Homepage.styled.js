import styled from "styled-components";

export const HomepageContainer = styled.div`
    font-family: "Open Sans", sans-serif;

    display: flex;
    flex-direction: row;
    justify-content: center;

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
            width: 30rem;
        }
    }

    span {
        color: ${({ theme }) => theme.mainColors.lightBlue};
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
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.mainColors.ctaPrimaryBlue};
    border: none;
    color: white;

    padding: 15px 40px 15px 40px;
    margin: 15px 15px 15px 0;
    border-radius: 5px;

    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    max-width: 250px;

    cursor: pointer;
`;
