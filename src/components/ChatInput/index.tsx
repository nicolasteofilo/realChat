/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { ChatInputContainer } from "./styles";
import { Button } from "@material-ui/core";
import { db } from "../../firabase";
import firabase from "firebase";

interface ChatInputProps {
    channelId?: string;
    channelName?: string;
}

function ChatInput({ channelId, channelName }: ChatInputProps) {
    const [message, setMessage] = useState("");
    console.log(channelId);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: message,
            timestamp: firabase.firestore.FieldValue.serverTimestamp(),
            user: "Nicolas Teófilo",
            userImage: "https://avatars.githubusercontent.com/u/81480818?v=4"
        });
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
