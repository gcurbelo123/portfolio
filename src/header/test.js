import React from 'react';
import styled, { keyframes } from 'styled-components';

const nameEnter = keyframes`
  0% {
    font-size: 0px;
  }
  100% {
    font-size: 136px;
  }
`;

const NameText = styled.div`
  font-family: Bangers;
  animation: 5s ${nameEnter} ease-out;
`;

const Test = () => (
  <>
    <NameText> Gilbert Curbelo </NameText>
  </>
);

export default Test;
