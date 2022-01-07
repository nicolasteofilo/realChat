import styled from "styled-components";

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        width: 40px;
        height: 40px;
        border-radius: 20%;
    }
`;

export const MessageInfo = styled.div`
    padding-left: 10px;
    span { 
        font-size: 0.8rem;
        color: #8f8f8f;
    }
`;
