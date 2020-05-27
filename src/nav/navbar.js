import React from 'react';
import { styled } from 'styletron-react';
import { useHistory } from 'react-router-dom';

const NavBarContainer = styled('div', {
  width: '90%',
  height: '10%',
  position: 'absolute',
});

const NavBarStyled = styled('div', {
  marginLeft: '40%',
  marginTop: '5%',
  width: '400px',
  borderBottom: '2px solid #D5544f',
});
const NavLink = styled('div', {
  color: '#D5544f',
  fontSize: '24px',
  marginLeft: '10px',
  fontFamily: 'Montserrat',
  display: 'inline-block',
  padding: '5px',
  ':hover': {
    cursor: 'pointer',
    color: '#9CC5C9',
    backgroundColor: '#D5544f',
  },
});

const NavBar = () => {
  const history = useHistory();
  return (
    <NavBarContainer>
      <NavBarStyled>
        <NavLink onClick={() => history.push('/about')}> About Me </NavLink>
        <NavLink onClick={() => history.push('/projects')}> Projects </NavLink>
        <NavLink onClick={() => history.push('/contact')}> Contact </NavLink>
      </NavBarStyled>
    </NavBarContainer>
  );
};

export default NavBar;
