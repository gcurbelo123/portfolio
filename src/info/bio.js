import React from 'react';
import { styled } from 'styletron-react';
import BioPic from '../images/biopic.jpg';
import CanvasJSReact from '../canvasjs.react';
import ReactIcon from '../images/react.png';

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
  overflow: 'hidden',
});

const BioImg = styled('img', {
  width: '400px',
});

const PowerChartBox = styled('div', {
  top: 0,
  left: '45%',
  position: 'absolute',
  height: '300px',
  width: '600px',
});

const HistoryBox = styled('div', {
  width: '90%',
  height: '200px',
  border: '1px solid white',
  marginTop: '32px',
  marginLeft: '5%',
  display: 'flex',
  flexDirection: 'column',
});

const HistoryTitle = styled('div', {
  width: '20%',
  height: '50px',
  border: '1px solid white',
});

const TitleText = styled('div', {
  color: 'white',
  fontSize: '48px',
  fontFamily: 'Bangers',
});

const HistoryInfo = styled('div', {
  width: '100%',
  flex: 1,
  border: '1px solid black',
});

const { CanvasJS } = CanvasJSReact;
const { CanvasJSChart } = CanvasJSReact;

const AboutMe = () => {
  const options = {
    animationEnabled: true,
    theme: 'light2',
    backgroundColor: 'transparent',
    cursor: `url(${ReactIcon}), auto;`,
    toolTip: {
      content: '{help}',
    },
    title: {
      text: 'Power Chart',
      fontColor: 'white',
    },
    axisX: {
      valueFormatString: ' ',
      reversed: true,
      tickThickness: 0,
      gridThickness: 0,
    },
    axisY: {
      valueFormatString: ' ',
      tickThickness: 0,
      gridThickness: 0,
    },
    data: [{
      type: 'bar',
      cursor: 'help',
      dataPoints: [
        {
          y: 8,
          indexLabel: 'ReactJS - Advanced',
          indexLabelFontColor: 'white',
          indexLabelPlacement: 'inside',
          color: 'green',
          help: 'ReactJS - Open source library for building user interfaces',
        },
        {
          y: 7,
          indexLabel: 'Python - Proficient',
          indexLabelFontColor: 'black',
          indexLabelPlacement: 'inside',
          color: 'yellow',
          cursor: 'help',
          help: 'Python - Interpreted, high-level, general-purpose programming language',
        },
        {
          y: 7,
          indexLabel: 'C++ - Proficient',
          indexLabelFontColor: 'black',
          indexLabelPlacement: 'inside',
          color: 'yellow',
          cursor: 'help',
          help: 'C++ - General-purpose object oriented programming language',
        },
        {
          y: 6,
          indexLabel: 'SQL - Intermediate',
          indexLabelFontColor: 'black',
          indexLabelPlacement: 'inside',
          color: 'orange',
          cursor: 'help',
          help: 'SQL - Used in programming and designed for managing data held in a relational database',
        },
        {
          y: 6,
          indexLabel: 'Java - Intermediate',
          indexLabelFontColor: 'black',
          indexLabelPlacement: 'inside',
          color: 'orange',
          cursor: 'help',
          help: 'Java - Used for application development and deployment',
        },
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
          <HistoryBox>
            <HistoryTitle>
              <TitleText> History </TitleText>
            </HistoryTitle>
            <HistoryInfo />
          </HistoryBox>
        </BioContainer>
      </ComicBook>
    </BioPage>
  );
};

export default AboutMe;
