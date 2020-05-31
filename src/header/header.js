import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { styled, withStyle } from 'styletron-react';
import { useHistory } from 'react-router-dom';
import ComicPhotoCover from '../images/gc.png';
import FirstApp from '../images/sticker.png';
import PriceQR from '../images/comicPurchase.png';

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
  border: 1px solid white;
`;

const ImgBackground = styled.img`
  z-index: 0;
  top: 0;
  width: 80%;
  margin-top: 15%;
  justify-content: center;
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

const ComicBookCover = () => {
  const history = useHistory();
  const qrClick = () => {
    window.open('https://qrco.de/bbXWHc', '_blank').focus();
  };

  const comicCLick = () => {
    history.push('/bio');
  };

  return (
    <CoverPage>
      <ComicBook>
        <ImgBackground src={ComicPhotoCover} alt="Photo Stolen!" />
        <QRPlace onClick={() => qrClick()} src={PriceQR} alt="Info Here" />
        <HeaderTextBox>
          <HeaderText>
            Introducing:
          </HeaderText>
          <NameText> Gilbert Curbelo </NameText>
        </HeaderTextBox>
        <DecalBox>
          <DecalSticker onClick={() => comicCLick()} src={FirstApp} alt="1st Comic Book Appearance!" />
        </DecalBox>
      </ComicBook>
    </CoverPage>
  );
};

export default ComicBookCover;
