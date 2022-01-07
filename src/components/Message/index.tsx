import React from "react";
import { MessageContainer, MessageInfo } from "./styles";

interface MessageProps {
    messageInfos: any;
}

function Message({ messageInfos }: MessageProps) {
    console.log(messageInfos);
    return (
        <MessageContainer>
            <img src={messageInfos.userImage} alt="" />
            <MessageInfo>
                <strong>{messageInfos.user}</strong>{' - '}<span>{new Date(messageInfos.timestamp?.toDate()).toUTCString()}</span>
                <p>{messageInfos.message}</p>
            </MessageInfo>
        </MessageContainer>
    );
}

export default Message;
