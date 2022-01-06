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

function Header() {
  return (
    <HeaderContainer>
      <Headerleft>
        <HeaderAvatar  style={{
          width: "30px",
          height: "30px",
        }} alt="Teste Teófilo" src="https://avatars.githubusercontent.com/u/81480818?v=4" variant="rounded" />
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
