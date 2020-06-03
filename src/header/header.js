import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { styled, withStyle } from 'styletron-react';
import { useHistory } from 'react-router-dom';
import ComicPhotoCover from '../images/gc.png';
import FirstApp from '../images/sticker-dark.png';
import PriceQR from '../images/comicPurchase.png';
import PubIcon from '../images/pub-icon.png';
import Arrow from '../images/right-arrow.svg';

const CoverPage = styled.div`
  width: 100%;
  min-height: 100%;
  position: fixed;
  background-color: black;
  overflow: scroll;
`;

const ComicBook = styled.div`
  width: 90%;
  margin-left: 5%;
  position: absolute;
  background-color: #003366;
  display: flex;
  justify-content: center;
  /* border: 1px solid white; */
`;

const ImgBackground = styled.img`
  z-index: 0;
  top: 0;
  width: 80%;
  margin-top: 15%;
  justify-content: center;
`;

const ComicBanner = styled.div`
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  margin-top: 2%;
  position: absolute;
  background-color: #FFF8DC;
  border-top: 1px solid black;
`;

const ComicBannerBox = styled.div`
  left: 0;
  top: 0;
  margin-left: 2%;
  margin-top: 5%;
  width: 10%;
  height: 10%;
  position: absolute;
  background-color: #FFF8DC;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Published = styled.div`
  top: 0;
  font-size: 24px;
  margin-top: 5%;
  margin-left: 5%;
  text-align: center;
  font-family: Fjalla One;
`;

const Publisher = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  bottom: 0;
`;

const No1 = styled.div`
  top: 0;
  float: left;
  font-family: Bangers;
  font-size: 32px;
  color: black;
  margin-left: 20%;
`;

const DoB = styled.div`
  top: 0;
  float: right;
  font-family: Bangers;
  font-size: 32px;
  color: black;
  margin-right: 5%;
`;

const HeaderTextBox = styled.div`
  top: 0;
  position: absolute;
  letter-spacing: 4px;
  margin-top: 5%;
  text-align: center;
`;

const HeaderText = styled.div`
  font-size: 64px;
  color: white;
  font-family: Bangers;
  position: relative;
  display: flex;
  justify-content: center;
`;

const nameEnter = keyframes`
  0% {
    font-size: 0px;
  }
  100% {
    font-size: 136px;
  }
`;

const NameText = styled.div`
  color: white;
  font-family: Bangers;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  text-shadow: 0px 0px 32px #000000;
  animation: 1.5s ${nameEnter} forwards;
`;

const DecalBox = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  margin-top: 25%;
  margin-right: 3%;
  display: flex;
`;

const DecalSticker = styled.img`
  z-index: 3;
  position: absolute;
  right: 0;
  top: 0;
  height: fit-content;
  width: fit-content;
  &:hover {

    cursor: pointer;
  }
`;

const QRPlace = styled.img`
  position: absolute;
  margin-top: 100%;
  margin-left: 5%;
  left: 0;
  top: 0;
  &:hover {
    cursor: pointer;
  }
`;

const TurnPage = keyframes`
  from {
    margin-right: 5%;
  }
  to {
    margin-right: 6%;
  }
`;

const NextPage = styled.div`
  bottom: 0;
  right: 0;
  width: 10%;
  height: 10%;
  margin-right: 5%;
  position: absolute;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 0.25s;
  animation-name: ${TurnPage};
  cursor: pointer;
  filter: invert(100%);
`;

const ComicBookCover = () => {
  const history = useHistory();
  const qrClick = () => {
    window.open('https://qrco.de/bbXWHc', '_blank').focus();
  };

  const comicCLick = () => {
    history.push('/bio');
  };

  const turnPage = () => {
    history.push('/education');
  };

  return (
    <CoverPage>
      <ComicBook>
        <ComicBannerBox>
          <Published> Published By: </Published>
          <Publisher src={PubIcon} alt="GC" />
        </ComicBannerBox>
        <ComicBanner>
          <No1> Issue #1 </No1>
          <DoB> 05/05/1998 </DoB>
        </ComicBanner>
        <ImgBackground src={ComicPhotoCover} alt="Photo Stolen!" />
        <QRPlace onClick={() => qrClick()} src={PriceQR} alt="Info Here" />
        <HeaderTextBox>
          <NameText> Gilbert Curbelo </NameText>
        </HeaderTextBox>
        <DecalBox>
          <DecalSticker onClick={() => comicCLick()} src={FirstApp} alt="1st Comic Book Appearance!" />
        </DecalBox>
        <NextPage onClick={() => turnPage()}>
          <img src={Arrow} alt="Turn Page" />
        </NextPage>
      </ComicBook>
    </CoverPage>
  );
};

export default ComicBookCover;
