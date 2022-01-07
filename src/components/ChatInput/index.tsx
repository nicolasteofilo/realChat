/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { ChatInputContainer } from "./styles";
import { Button } from "@material-ui/core";
import { auth, db } from "../../firabase";
import firabase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface ChatInputProps {
    channelId?: string;
    channelName?: string;
    chatRef?: any;
}

function ChatInput({ channelId, channelName, chatRef }: ChatInputProps) {
    const [message, setMessage] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: message,
            timestamp: firabase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL,
        });

        chatRef?.current.scrollIntoView({ behavior: "smooth" });

        setMessage("");
    };

    return (
        <ChatInputContainer>
            <form action="" onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    placeholder={`Mensagem em #${channelName}`}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button hidden type="submit">
                    Enviar
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export { ChatInput };
