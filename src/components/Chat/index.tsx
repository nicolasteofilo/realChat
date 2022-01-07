import React from "react";
import {
    ChatContainer,
    Header,
    HeaderLeft,
    HeaderRight,
    ChatMessages,
} from "./styles";
import { AiOutlineStar, AiOutlineInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { SelectRoomId } from "../../features/appSlice";

import { ChatInput } from "../ChatInput/index";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firabase";
import Message from "../Message";

function Chat() {
    const roomId = useSelector(SelectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );

    const [roomMessages] = useCollection(
        roomId &&
            db
                .collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
    );

    console.log(roomDetails?.data());
    console.log(roomMessages);

    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>
                            #{roomDetails && String(roomDetails?.data()?.name)}
                        </strong>
                    </h4>
                    <AiOutlineStar />
                </HeaderLeft>
                <HeaderRight>
                    <AiOutlineInfoCircle />
                    <p>Detalhes</p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages &&
                    roomMessages.docs.map((doc) => (
                        <Message
                            key={doc.id}
                            messageInfos={doc.data()}
                        />
                    ))}
                <ChatInput
                    channelId={roomId}
                    channelName={
                        (roomDetails && String(roomDetails?.data()?.name)) || ""
                    }
                />
            </ChatMessages>
        </ChatContainer>
    );
}

export default Chat;
