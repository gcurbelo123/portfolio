import React from 'react';
import { styled } from 'styletron-react';
import Me from '../images/me.jpg';

const MyHome = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
});

const MyFace = styled('img', {
  width: '25%',
  height: '40%',
});
const AboutMe = () => (
  <MyHome>
    Hi! Thanks for coming!
    <MyFace src={Me} alt="Uh-oh, I didn't Load!" />
  </MyHome>
);

export default AboutMe;
