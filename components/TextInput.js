import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

const InputText = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    ></TextInput>
  );
};

const TextInput = styled.TextInput`
  padding-vertical: 12px;
  padding-horizontal: 10px;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 1px;
  border-color: ${Colors.grey};
  width: 100%;
`;

export default InputText;
