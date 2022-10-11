import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

const InputText = (props) => {
  const { placeholder } = props;
  return <TextInput placeholder={placeholder}></TextInput>;
};

const TextInput = styled.TextInput`
  padding-vertical: 12;
  padding-horizontal: 10;
  border-radius: 30;
  margin-top: 20;
  border-width: 1;
  border-color: ${Colors.grey};
  width: 85%;
`;

export default InputText;
