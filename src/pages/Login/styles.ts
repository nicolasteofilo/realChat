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
    background-color: #f5f5f5;
    text-align: center;
    padding: 100px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.7);

    > img {
        object-fit: contain;
        height: 100px;
        user-select: none;
    }
`;

export const ButtonLogin = styled.button`
    margin-top: 10px;
    background-color: #00a680;
    border-radius: 6px;
    border: none;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 5px;
    }
`;
