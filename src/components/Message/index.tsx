import React from "react";
import { MessageContainer, MessageInfo } from "./styles";

interface MessageProps {
    messageInfos: any;
}

function Message({ messageInfos }: MessageProps) {
    console.log(messageInfos);

    const date = Intl.DateTimeFormat("pt-BR",  { 
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: `numeric`,
        minute: "2-digit",
     }).format(
        new Date(new Date(messageInfos.timestamp?.toDate()).toUTCString())
    );
    const dateFomated = date.replace(':', 'h');
    return (
        <MessageContainer>
            <img src={messageInfos.userImage} alt="" />
            <MessageInfo>
                <strong>{messageInfos.user}</strong>{' - '}<span>{dateFomated}</span>
                <p>{messageInfos.message}</p>
            </MessageInfo>
        </MessageContainer>
    );
}

export default Message;
