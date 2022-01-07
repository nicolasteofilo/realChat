import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import {
    ChatContainer,
    Header,
    HeaderLeft,
    HeaderRight,
    ChatMessages,
    ChatBottom,
} from "./styles";
import { AiOutlineStar, AiOutlineInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { SelectRoomId } from "../../features/appSlice";

import { ChatInput } from "../ChatInput/index";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firabase";
import Message from "../Message";

const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    border-color: "#FFF";
`;

function Chat() {
    const [color] = useState("#ffffff");
    const chatRef = useRef(null);
    const roomId = useSelector(SelectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );

    const [roomMessages, loading] = useCollection(
        roomId &&
            db
                .collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
    );

    console.log(loading);

    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>
                                #
                                {roomDetails &&
                                    String(roomDetails?.data()?.name)}
                            </strong>
                        </h4>
                        <AiOutlineStar />
                    </HeaderLeft>
                    <HeaderRight>
                        <AiOutlineInfoCircle />
                        <p>Detalhes</p>
                    </HeaderRight>
                </Header>
                <ClipLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={25}
                />
                <ChatMessages>
                    {roomMessages &&
                        roomMessages.docs.map((doc) => (
                            <Message key={doc.id} messageInfos={doc.data()} />
                        ))}
                    <ChatBottom ref={chatRef} />
                </ChatMessages>
                {roomId && (
                    <ChatInput
                        chatRef={chatRef}
                        channelId={roomId}
                        channelName={
                            (roomDetails &&
                                String(roomDetails?.data()?.name)) ||
                            ""
                        }
                    />
                )}
            </>
        </ChatContainer>
    );
}

export default Chat;
