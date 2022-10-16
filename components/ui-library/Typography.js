import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';
import { Text } from 'react-native';

const Typography = ({ header, children, green, ...props }) => {
  return (
    <StyledTypography header={header} green={green} {...props}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.Text`
  font-weight: ${(props) => (props.header ? 'bold' : 'normal')};
  font-size: ${(props) => (props.header ? '24' : '14')};
  color: ${(props) => (props.green ? Colors.limeGreen : undefined)};
`;

export default Typography;
