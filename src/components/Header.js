import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header-container {
    background-color: red;
    width: 100%;
    height: 114px;
    margin: 0 auto;
    position: relative;

    .logo{
        width: 160px;
        height: 25px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        
    }

    .ham{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        margin-right: 70px;
        cursor: pointer;

        img{
            width: 30px;
            height: 25px;
        }
    }
  }
`;
function Header(props) {
  return (
    <HeaderWrapper>
      <header>
        <div className="header-container">
          <a href="/" className="logo">
            <img src="./icons/logo.png"alt="로고" />
          </a>
          <div className="ham">
            <img src="./icons/ham.png" alt="햄버거버튼"/>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  );
}

export default Header;
