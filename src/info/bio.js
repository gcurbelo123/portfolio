import React from 'react';
import { styled } from 'styletron-react';
import BioPic from '../images/biopic.jpg';
import CanvasJSReact from '../canvasjs.react';

const BioPage = styled('div', {
  width: '100%',
  height: 'auto',
  minHeight: '100%',
  position: 'fixed',
  backgroundColor: 'black',
});

const BioContainer = styled('div', {
  width: '100%',
  position: 'relative',
  maxHeight: '100%',
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

const BioImgBox = styled('div', {
  height: '400px',
  width: '400px',
  border: '1px solid white',
  marginLeft: '5%',
  marginTop: '5%',
});

const BioImg = styled('img', {
  height: '400px',
  width: '400px',
});

const PowerChartBox = styled('div', {
  top: 0,
  left: '50%',
  position: 'absolute',
  height: '300px',
  width: '500px',
});

const { CanvasJS } = CanvasJSReact;
const { CanvasJSChart } = CanvasJSReact;

const AboutMe = () => {
  const options = {
    animationEnabled: true,
    theme: 'light2',
    backgroundColor: 'transparent',
    title: {
      text: 'Power Chart',
    },
    axisX: {
      reversed: true,
    },
    data: [{
      type: 'bar',
      dataPoints: [
        { y: 8, label: 'ReactJS', color: 'green' },
        { y: 7, label: 'Python', color: 'yellow' },
        { y: 7, label: 'C++', color: 'yellow' },
        { y: 6, label: 'SQL', color: 'orange' },
      ],
    }],
  };
  return (
    <BioPage>
      <ComicBook>
        <BioContainer>
          <BioImgBox>
            <BioImg src={BioPic} alt="My nemesis stole my picture!" />
          </BioImgBox>
          <PowerChartBox>
            <CanvasJSChart options={options} />
          </PowerChartBox>
        </BioContainer>
      </ComicBook>
    </BioPage>
  );
};

export default AboutMe;
