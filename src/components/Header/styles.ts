import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
	height: 44px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
`;

export const Headerleft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  svg {
    margin-left: auto;
    margin-right: 30px;
    color: var(--white-color);
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  background-color: var(--input-color);
	height: 100%;
	line-height: 100%;
	align-items: center;

  svg {
    color: var(--white-color);
		margin-right: 10px;
  }
`;

export const ContentHeaderSearch = styled.div`
  display: flex;
  /* flex: 0.4; */
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  /* padding: 0 50px; */
  align-items: center;
  color: var(--gray-text-color);
  border: 2px solid #808080;

  > input {
    background: transparent;
    border: none;
    text-align: center;
    min-width: 40vw;
    outline: 0;
    color: white;
    padding: 5px 0px;
    outline: 0;
    color: var(--white-color);
		align-items: flex-start;
		text-align: start;
		padding-left: 10px;

    ::placeholder {
      font-weight: normal;
      color: var(--gray-text-color);
    }
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  svg {
    margin-left: auto;
    margin-right: 20px;
    color: var(--white-color);
    cursor: pointer;
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
	border-radius: 0.5px;
	
	div {
		width: 20px;
		height: 20px;
	}

  :hover {
    opacity: 0.7;
  }
`;
