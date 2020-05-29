import React from 'react';
import { styled } from 'styletron-react';
import ComicBookCover from '../header/header';

const HomePage = styled('div', {
  width: '100%',
  height: 'auto',
  minHeight: '100%',
  position: 'fixed',
  backgroundColor: 'black',
});

const ComicBook = styled('div', {
  width: '90%',
  minHeight: '100%',
  maxHeight: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  msTransform: 'translate(-50%, -50%)',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#003366',
  display: 'block',
  overflow: 'scroll',
  justifyContent: 'center',
});

const Home = () => (
  <HomePage>
    <ComicBook>
      <ComicBookCover />
    </ComicBook>
  </HomePage>
);

export default Home;
