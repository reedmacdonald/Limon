import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

const Option = ({ onPress, title, selected }) => {
  return (
    <StyledPressable selected={selected} onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  margin-horizontal: 5px;
  border-radius: 30px;
  border: ${(props) =>
    props.selected
      ? `1px solid ${Colors.matcha}`
      : `1px solid ${Colors.charcoal}`};
  margin-top: 20px;
  elevation: 3;
  background-color: ${(props) =>
    props.selected ? Colors.matcha : Colors.white};
`;

const StyledText = styled.Text`
  fontsize: 16px;
  lineheight: 21px;
  fontweight: bold;
  letterspacing: 0.25px;
  color: ${Colors.charcoal};
`;

export default Option;
