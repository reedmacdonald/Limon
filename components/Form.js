import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

const Form = (props) => {
  const {
    onPress,
    title,
    disabled = false,
    secondary = false,
  } = props;
  return (
    <View disabled={disabled} secondary={secondary} onPress={onPress}>
      {props.children}
    </View>
  );
};

const View = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  border-radius: 30px;
  margin-top: -40px;
  elevation: 3;
  background-color: white;
  width: 100%;
  height: 80%;
`;

export default Form;
