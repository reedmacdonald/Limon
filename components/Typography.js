import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';
import { Text } from 'react-native';

const Typography = ({ header, children }) => {
  return (
    <StyledTypography header={header}>{children}</StyledTypography>
  );
};

const StyledTypography = styled.Text`
  font-weight: ${(props) => (props.header ? 'bold' : 'normal')};
  font-size: ${(props) => (props.header ? '24' : '14')};
`;

export default Typography;
