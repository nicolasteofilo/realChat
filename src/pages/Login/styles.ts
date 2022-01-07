import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const LoginInnerContainer = styled.div`
    text-align: center;
    padding: 50px;
    border-radius: 6px;

    img {
        width: 100px;
        height: 100px;
    }

    > div {
        svg {
            font-size: 55px;
            color: #ff5a5f;
        }
    }

    > img {
        object-fit: contain;
        height: 100px;
        user-select: none;
    }
`;

export const ButtonLogin = styled.button`
    margin-top: 10px;
    background-color: transparent;
    border-radius: 6px;
    border: 2px solid #FFF;
    width: 100%;
    height: 50px;
    font-size: 1rem;
    color: #FFF;
    background-color: #00a680;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    svg {
        margin-right: 5px;
    }
`;
