import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainCotainer = styled.div`
  position: relative;
  margin-right: 67px;
  margin-left: 67px;
  margin-top: 65px;
  margin-bottom: 75px;
  box-sizing: border-box;
`;

const MainBoxContainer = styled.div`
  width: 1150px;
  height: 340px;
  border: 1px solid #b5b5b6;
  margin-bottom: 25px;
  background-image: url(${(props) => props.banner});
  background-size: cover;
  position: relative;
`

const MainBox = styled.div`
  position: absolute;
  left: 100px;
  bottom: 0;
  margin-bottom: 70px;
`;

const MainTitle = styled.h2`
  font-size: 40px;
  color: #3e3a39;
  font-family: Helvetica;
`;

const MainSubTitle = styled.p`
  margin-top: 15px;
  font-size: 15px;
  color: #3e3a39;
`;

const MainBoxButton = styled.div`
  width: 140px;
  height: 28px;
  border-radius: 14px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3e3a39;
  border: 1px solid #3e3a39;
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
`
function Main(props) {
  return (
    <main>
      <MainWrapper>
        <MainCotainer>
          <MainBoxContainer banner={`/images/banner_01.jpg`}>
            <MainBox>
              <MainTitle>About</MainTitle>
              <MainSubTitle>비핸즈 연혁, 시설, 소개</MainSubTitle>
              <MainBoxButton>VIEW MORE</MainBoxButton>
            </MainBox>
          </MainBoxContainer>
          <MainBoxContainer banner={`/images/banner_02.jpg`}>
            <MainBox>
              <MainTitle>Portfolio</MainTitle>
              <MainSubTitle>비핸즈의 제작 제품 포트폴리오</MainSubTitle>
              <MainBoxButton>VIEW MORE</MainBoxButton>
            </MainBox>
          </MainBoxContainer>
          <MainBoxContainer banner={`/images/banner_03.jpg`}>
            <MainBox>
              <MainTitle>Contact</MainTitle>
              <MainSubTitle>비핸즈에 대한 문의 및 연락</MainSubTitle>
              <MainBoxButton>VIEW MORE</MainBoxButton>
            </MainBox>
          </MainBoxContainer>
          <MainBoxContainer banner={`/images/banner_04.jpg`}>
            <MainBox>
              <MainTitle>Artist</MainTitle>
              <MainSubTitle>비핸즈와 작업한 아티스트</MainSubTitle>
              <MainBoxButton>VIEW MORE</MainBoxButton>
            </MainBox>
          </MainBoxContainer>
        </MainCotainer>
      </MainWrapper>
    </main>
  );
}

export default Main;
