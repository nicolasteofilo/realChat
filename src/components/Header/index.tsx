import React from "react";
import {
    HeaderContainer,
    Headerleft,
    HeaderSearch,
    HeaderRight,
    HeaderAvatar,
    ContentHeaderSearch,
} from "./styles";
import {
    FiClock,
    FiSearch,
    FiHelpCircle,
    FiArrowRight,
    FiArrowLeft,
} from "react-icons/fi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firabase";

function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <Headerleft>
                <HeaderAvatar
                    style={{
                        width: "30px",
                        height: "30px",
                    }}
                    onClick={() => auth.signOut()}
                    src={String(user?.photoURL)}
                    alt={String(user?.displayName)}
                    variant="rounded"
                />
            </Headerleft>
            <HeaderSearch>
                <FiArrowLeft size={20} />
                <FiArrowRight size={20} />
                <FiClock size={20} />
                <ContentHeaderSearch>
                    <input type="text" placeholder="Pesquisar" />
                    <FiSearch size={15} />
                </ContentHeaderSearch>
            </HeaderSearch>
            <HeaderRight>
                <FiHelpCircle size={20} />
            </HeaderRight>
        </HeaderContainer>
    );
}

export { Header };
