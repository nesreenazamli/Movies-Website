import styled from "styled-components";
import { FlexBox, FlexRow } from "../../Global.Styles";
import { Link } from "react-router-dom";

export const NavContainer = styled(FlexRow)`
  background: #1c1c1c;
  height: 120px;
`;

export const NavInnerContainer = styled(FlexRow)`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  height: auto;
  max-height: 80px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const SearchInput = styled("input")`
  height: 40px;
  width: 30%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  border: none;
  padding: 12px 26px;

  &:focus {
    outline: none;
    border: none;
  }
  ::placeholder {
    font-size: 13px;
    color: #000;

  }
`;

export const SearchButton = styled(FlexBox)`
  width: 152px;
  height: 40px;
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
`;