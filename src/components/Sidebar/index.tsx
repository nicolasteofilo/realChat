import React from "react";
import {
    SidebarContainer,
    SidebarHeader,
    SidebarInfo,
    CreateIcons,
} from "./styles";
import { SibebarOption } from "./SidebarOption";

import { BsRecordFill } from "react-icons/bs";
import {
    BiAt,
    BiCommentDots,
    BiFolderOpen,
    BiGridHorizontal,
    BiGroup,
    BiTag,
} from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firabase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firabase";

function Sidebar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth);

    console.log(channels, loading, error)
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>
                        CHAT
                        <FiArrowDown />
                    </h2>
                    <h3>
                        <BsRecordFill color="#2bac76" />
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcons color="#fff" size={20} />
            </SidebarHeader>
            <SibebarOption title="Conversas" Icon={BiCommentDots} />
            <SibebarOption title="Menções e Reações" Icon={BiAt} />
            <SibebarOption title="Items Salvos" Icon={BiTag} />
            <SibebarOption title="Pessoas e Grupos" Icon={BiGroup} />
            <SibebarOption title="Apps" Icon={BiGridHorizontal} />
            <SibebarOption title="Explorador de arquivos" Icon={BiFolderOpen} />
            <SibebarOption title="Mostrar nenos" Icon={IoMdArrowUp} />
            <hr />
            <SibebarOption title="Canais" Icon={IoMdArrowDown} />
            <hr />
            <SibebarOption
                title="Criar canal"
                addChanelOption={true}
                Icon={IoMdAddCircleOutline}
            />
            {channels?.docs.map((doc: any) => (
                <SibebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                    addChanelOption={false}
                />
            ))}
        </SidebarContainer>
    );
}

export default Sidebar;
