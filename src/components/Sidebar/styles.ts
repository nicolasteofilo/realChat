import styled from "styled-components";
import { MdOutlineCreate } from "react-icons/md";

export const SidebarContainer = styled.div`
  background-color: #181a1b;
  color: var(--white-color);
  flex: 0.3;
  border-top: 1px solid var(--border-sidebar);
  max-width: 260px;
  border-right: 2px solid #8080803f;

  hr { 
    color: #8080803f;
    border: 1px solid #8080803f;
    margin: 10px 0;
  }
`;

export const SidebarHeader = styled.div`
  margin-top: 60px;
  display: flex;
  border-bottom: 1px solid #8080803f;
  padding-bottom: 10px;
  padding: 13px;
`;

export const SidebarInfo = styled.div`
  flex: 1;
  h2 {
    display: flex;
    align-items: center;
    font-size: rem;
    margin-bottom: 5px;
    svg {
      width: 15px;
      height: 15px;
    }
}
h3 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    svg {
        margin-right: 5px;
    }
  }
`;

export const CreateIcons = styled(MdOutlineCreate)`
  width: 40px;
  height: 40px;
  background-color: #4040ff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
