import React from 'react';
import { styled, withStyle } from 'styletron-react';
import { useHistory } from 'react-router-dom';
import ComicPhotoCover from '../images/gc.png';
import FirstApp from '../images/sticker.png';
import PriceQR from '../images/comicPurchase.png';

const CoverPage = styled('div', {
  width: '100%',
  minHeight: '100%',
  position: 'fixed',
  backgroundColor: 'black',
  overflow: 'scroll',
});

const ComicBook = styled('div', {
  width: '90%',
  marginLeft: '5%',
  position: 'absolute',
  backgroundColor: '#003366',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid white',
});

const ImgBackground = styled('img', {
  zIndex: 0,
  top: 0,
  width: '80%',
  marginTop: '15%',
  justifyContent: 'center',
});

const HeaderTextBox = styled('div', {
  top: 0,
  position: 'absolute',
  letterSpacing: '4px',
  marginTop: '5%',
  textAlign: 'center',
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
  marginTop: '25%',
  marginRight: '3%',
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
  position: 'absolute',
  marginTop: '100%',
  marginLeft: '5%',
  left: 0,
  top: 0,
  ':hover': {
    cursor: 'pointer',
  },
});

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
