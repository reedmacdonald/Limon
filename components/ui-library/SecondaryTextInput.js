import styled from 'styled-components/native';
import InputText from './TextInput';
import { Colors } from '../../constants/Colors';
import React from 'react';
import Typography from './Typography';

export const Input = styled(InputText)`
  border: none;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.grey};
  border-radius: 0;
  width: 100%;
  height: 30px;
`;

const StyledView = styled.View`
  width: 100%;
  margin-top: 50px;
`;

export const SecondaryInput = ({ label, ...props }) => {
  return (
    <StyledView>
      <Typography style={{ marginBottom: -15 }}>{label}</Typography>
      <Input {...props} />
    </StyledView>
  );
};
