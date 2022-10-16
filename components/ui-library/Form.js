import React from 'react';
import styled from 'styled-components/native';

const Form = ({ onPress, disabled, secondary, children }) => {
  return (
    <View disabled={disabled} secondary={secondary} onPress={onPress}>
      {children}
    </View>
  );
};

const View = styled.View`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  padding-horizontal: 40px;
  border-radius: 30px;
  margin-top: -40px;
  elevation: 3;
  background-color: white;
  width: 100%;
  height: 80%;
`;

export default Form;
