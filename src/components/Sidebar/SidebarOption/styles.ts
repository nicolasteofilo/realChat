import styled from "styled-components";

export const SidebarOptionsContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2px;

  svg {
    font-size: 18px;
    margin: 10px 10px;
  }

  h3 {
    font-size: 16px;
    font-weight: normal;
  }

  >h3 > span {
    padding: 15px;
  }

  :hover {
      background: rgba(24, 26, 27, 0.2);

      transition: background 0.2s;
  }
`;


export const SidebarOptionChannel = styled.h3`
    padding: 5px 0;
    font-weight: bold;
`;