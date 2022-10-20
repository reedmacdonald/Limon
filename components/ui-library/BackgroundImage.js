import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';
import BackgroundArt from '../../assets/backgroundArt.png';

const BackgroundImageStyle = styled.Image`
  backgroundcolor: ${Colors.pistachio};
  position: relative;
  width: 100%;
  height: 200px;
  top: -10px;
`;

export const BackgroundImage = (props) => (
  <BackgroundImageStyle
    source={BackgroundArt}
    alt="lemon background"
    {...props}
  />
);
