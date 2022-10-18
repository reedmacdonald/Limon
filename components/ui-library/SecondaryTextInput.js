import styled from 'styled-components';
import InputText from './TextInput';
import { Colors } from '../../constants/Colors';
import React from 'react';
import Typography from './Typography';

export const Input = styled(InputText)`
  border: none;
  border-bottom: ${Colors.grey};
  border-radius: 0;
`;

const StyledView = styled.View``;

export const SecondaryInput = ({ label, ...props }) => {
  return (
    <StyledView>
      <Typography>{label}</Typography>
      <SecondaryInput {...props} />
    </StyledView>
  );
};
