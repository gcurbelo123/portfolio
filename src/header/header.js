import React from 'react';
import { styled, withStyle } from 'styletron-react';
import ComicPhotoCover from '../images/gc.png';
import FirstApp from '../images/sticker.png';
import PriceQR from '../images/comicPurchase.png';
import { ReactComponent as DownArrow } from '../images/down-arrow.svg';
import NavBar from '../nav/navbar';

const HeaderContainer = styled('div', {
  width: '100%',
  position: 'relative',
  maxHeight: '100%',
});

const ImgBackground = styled('img', {
  zIndex: 0,
  top: 0,
  width: '80%',
  marginLeft: '10%',
  marginTop: '15%',
  justifyContent: 'center',
  position: 'absolute',
  overflow: 'hidden',
});

const HeaderTextBox = styled('div', {
  top: 0,
  left: '26%',
  letterSpacing: '4px',
  marginTop: '5%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const HeaderText = styled('div', {
  fontSize: '64px',
  color: 'white',
  fontFamily: 'Bangers',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

const NameText = withStyle(HeaderText, {
  fontSize: '136px',
  textShadow: '0px 0px 32px #000000',
});

const DecalBox = styled('div', {
  top: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
});

const DecalSticker = styled('img', {
  zIndex: 3,
  position: 'absolute',
  right: 0,
  top: 0,
  height: 'fit-content',
  width: 'fit-content',
  ':hover': {
    cursor: 'pointer',
  },
});

const QRPlace = styled('img', {
  marginTop: '80%',
  position: 'absolute',
  float: 'left',
  marginLeft: '-15%',
  top: 0,
  ':hover': {
    cursor: 'pointer',
  },
});

const qrClick = () => {
  window.open('https://qrco.de/bbXWHc', '_blank').focus();
};

const comicCLick = () => {
  window.open('https://drive.google.com/file/d/1BpLpQLxdJq9m4x3LzCzfYuvtEQBHtnMX/view', '_blank').focus();
};

const Header = () => (
  <HeaderContainer>
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
  </HeaderContainer>
);

export default Header;
