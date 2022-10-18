import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

const InputText = (props) => {
  return (
    <TextInputWrapper style={props.wrapperStyle}>
      {props.icon && props.icon}
      <TextInput {...props} />
    </TextInputWrapper>
  );
};

const TextInput = styled.TextInput``;

const TextInputWrapper = styled.View`
  padding-vertical: 12px;
  padding-horizontal: 10px;
  border-radius: 30px;
  margin-top: 20px;
  border-width: 1px;
  border-color: ${Colors.grey};
  width: 100%;
  flex-direction: row;
  background-color: ${Colors.white};
`;

export default InputText;
