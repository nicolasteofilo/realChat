import styled from "styled-components";

export const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: auto;
    margin-top: 44px;
    color: white;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #8080803f;
`


export const HeaderLeft = styled.div`
    display: flex;
    margin-left: 10px;
    h4 {
        strong {
            text-transform: lowercase;
        }
    }
    svg {
        margin-left: 10px;
        font-size: 18px;
    }
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    svg { 
        margin-right: 5px;
    }
`

export const ChatMessages = styled.div``;

export const ChatBottom = styled.div`
    padding-bottom: 200px;
`;