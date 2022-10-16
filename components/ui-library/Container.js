import React from 'react';
import { Colors } from '../../constants/Colors';
import styled from 'styled-components/native';

const Container = ({ style, children }) => {
  return <StyledView style={style}>{children}</StyledView>;
};

const StyledView = styled.View`
  flex: 1;
  background-color: ${Colors.pistachio};
  align-items: center;
  justify-content: center;
`;

export default Container;
