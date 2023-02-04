import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;

  .main-container {
    position: relative;
    margin-right: 67px;
    margin-left: 67px;
    margin-top: 65px;
    margin-bottom: 75px;
    box-sizing: border-box;
  }
`;
function Main(props) {
  return (
    <main>
      <MainWrapper>
        <div className="main-container"></div>
      </MainWrapper>
    </main>
  );
}

export default Main;
