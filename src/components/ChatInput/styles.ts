import styled from "styled-components";

export const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border-radius: 10px;
        border: none;
        border: 1px solid #FFF;
        padding: 20px;
        outline: none;
        background-color: #222529;
        font-size: 0.9rem;
        color: #FFF;
    }

    button {
        display: none !important;
    }
`;
