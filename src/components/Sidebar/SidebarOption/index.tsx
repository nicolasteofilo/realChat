import React from "react";
import { SidebarOptionsContainer, SidebarOptionChannel } from "./styles";
import "reactjs-popup/dist/index.css";
import { db } from '../../../firabase'

interface SibebarOptionProps {
    Icon?: React.ComponentType<any>;
    title: string;
    addChanelOption?: boolean;
    id?: string;
}

function SibebarOption({ Icon, title, addChanelOption = false }: SibebarOptionProps) {
    function addChannel() {
        const channelName = prompt("Insira o nome do canal");
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    function selectChannel() {
        prompt("Selecionar canal");
    }

    return (
        <SidebarOptionsContainer
            onClick={addChanelOption === true ? addChannel : selectChannel}
        >
            {Icon && <Icon />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionsContainer>
    );
}

export { SibebarOption };
