import React from 'react';
import { styled } from 'styletron-react';
import ComicBookCover from '../header/header';
import Test from '../header/test';

const HomePage = styled('div', {
  width: '100%',
  minHeight: '100%',
  position: 'fixed',
  backgroundColor: 'black',
});

const Home = () => (
  <ComicBookCover />
);

export default Home;
