import React from 'react';
import { styled } from 'styletron-react';
import IconImg from '../images/icon.png';
import { ReactComponent as DownArrow } from '../images/down-arrow.svg';
import NavBar from '../nav/navbar';

const HeaderContainer = styled('div', {
  minHeight: '100%',
  height: '100%',
  width: '100%',
  position: 'fixed',
  // backgroundImage: `url(${BackgroundImg})`,
  // backgroundColor: '#87CEEB',
  // backgroundColor: '#00628B',
  backgroundColor: '#9CC5C9',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'block',
});

const IconStyle = styled('img', {
  position: 'absolute',
  height: '200px',
  width: '200px',
  right: 0,
  marginTop: '-11%',
  marginRight: '25%',
});

const BouncingArrow = styled('div', {
  height: '50px',
  width: '50px',
  zIndex: 3,
  bottom: 0,
  position: 'absolute',
  left: '50%',
});

const HeaderTextBox = styled('div', {
  letterSpacing: '3px',
  padding: '18px',
  marginTop: '20%',
  marginLeft: '15%',
});

const HeaderText = styled('div', {
  fontSize: '64px',
  color: '#D5544f',
  fontFamily: 'Orbitron',
  // textShadow: '0px 0px 32px #000000',
});

const Header = () => (
  <HeaderContainer>
    <NavBar />
    <HeaderTextBox>
      <HeaderText> Gilbert Curbelo </HeaderText>
    </HeaderTextBox>
    <IconStyle src={IconImg} alt="Me!" />
  </HeaderContainer>
);

export default Header;
