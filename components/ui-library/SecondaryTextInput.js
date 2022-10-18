import styled from 'styled-components/native';
import InputText from './TextInput';
import { Colors } from '../../constants/Colors';
import React from 'react';
import Typography from './Typography';

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.grey};

  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  height: 60px;
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
