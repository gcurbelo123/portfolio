import React from 'react';
import { styled } from 'styletron-react';
import Header from '../header/header';
import AboutMe from '../info/aboutme';
import Footer from '../footer/footer';

const HomePage = styled('div', {
  width: '100%',
  height: '100%',
});

const HomeContainer = styled('div', {
  width: '90%',
  height: '90%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  msTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  display: 'inline-block',
  padding: '16px',
  justifyContent: 'center',
});

const Home = () => (
  <HomePage>
    <Header />
    <Footer />
  </HomePage>
);

export default Home;
