import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  border-bottom: 1px solid #b5b5b6;
`;
const TopBar = styled.div`
  height: 10px;
  background-color: #000;
`;
const  HeaderContainer = styled.div`
  width: 100%;
  height: 114px;
  margin: 0 auto;
  position: relative;
`
const LogoIcon = styled.a`
  width: 160px;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`
const HamIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  margin-right: 70px;
  cursor: pointer;
`

const LogoImg = styled.img``
const HamImg = styled.img`
  width: 30px;
  height: 25px;
`

function Header(props) {
  return (
    <HeaderWrapper>
      <TopBar/>
      <header>
        <HeaderContainer>
          <LogoIcon>
            <LogoImg src="./icons/logo.png"alt="로고" />
          </LogoIcon>
          <HamIcon>
            <HamImg src="./icons/ham.png" alt="햄버거버튼"/>
          </HamIcon>
        </HeaderContainer>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
