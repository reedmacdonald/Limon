import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

const BackgroundImage = (props) => {
  return <StyledImage {...props} />;
};

const StyledImage = styled.Image`
  backgroundcolor: ${Colors.pistachio};
  position: relative;
  width: 100%;
  height: 150px;
  top: -10px;
`;

export default BackgroundImage;
