import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

const LongOption = ({ onPress, title, logo = '+' }) => {
  return (
    <StyledPressable onPress={onPress}>
      <StyledText>{title}</StyledText>
      <StyledText>{logo}</StyledText>
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  margin-horizontal: 5px;
  border-radius: 30px;
  width: 80%;
  border: 1px solid ${Colors.charcoal};
  margin-top: 20px;
  elevation: 3;
  background-color: ${Colors.white};
`;

const StyledText = styled.Text`
  fontsize: 16px;
  lineheight: 21;
  fontweight: bold;
  letterspacing: 0.25;
  color: ${Colors.charcoal};
`;

export default LongOption;
