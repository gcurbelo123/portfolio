import React from 'react';
import { styled } from 'styletron-react';
import { useHistory } from 'react-router-dom';
import Graduation from '../images/grad.jpg';
import Matsui from '../images/matsui.jpg';
import Family from '../images/family.jpg';

const EducationPage = styled('div', {
  width: '100%',
  height: 'auto',
  minHeight: '100%',
  position: 'fixed',
  backgroundColor: 'black',
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

const GradPhoto = styled('img', {
  width: '40%',
  marginLeft: '3%',
  marginTop: '3%',
  border: '4px solid white',
  float: 'left',
});

const MatsuiDiv = styled('div', {
  width: '25%',
  marginRight: '5%',
  marginTop: '3%',
  float: 'right',
  border: '4px solid white',
  position: 'relative',
  ':hover': {
    cursor: 'pointer',
  },
  zIndex: 3,
});

const MatsuiFlower = styled('img', {
  width: '25%',
  marginRight: '5%',
  marginTop: '3%',
  float: 'right',
  border: '4px solid white',
  zIndex: 2,
  transition: '.5s ease',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.5',
  },
});

const MatsuiTextCon = styled('div', {
  zIndex: 1,
  color: 'white',
  transition: '.5s ease',
  opacity: 1,
  float: 'right',
});

const FamilyPhoto = styled('img', {
  border: '4px solid white',
  width: '23%',
  float: 'right',
  marginLeft: '4%',
  bottom: 0,
  marginBottom: '2%',
  position: 'absolute',
});

const PageNum = styled('div', {
  bottom: 0,
  left: 0,
  position: 'absolute',
});

const Education = () => {
  const history = useHistory();

  return (
    <EducationPage>
      <ComicBook>
        <GradPhoto src={Graduation} alt="Graduation" />
        <MatsuiFlower src={Matsui} alt="Matsui" />
        <FamilyPhoto src={Family} alt="Family" />
        <PageNum> 1 </PageNum>
      </ComicBook>
    </EducationPage>
  );
};

export default Education;
