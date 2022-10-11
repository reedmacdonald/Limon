import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';

const Button = (props) => {
  const {
    onPress,
    title,
    disabled = false,
    secondary = false,
  } = props;
  return (
    <StyledPressable
      disabled={disabled}
      secondary={secondary}
      onPress={onPress}
    >
      <StyledText disabled={disabled} secondary={secondary}>
        {title}
      </StyledText>
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding-vertical: 12;
  padding-horizontal: 90;
  border-radius: 30;
  margin-top: 20;
  elevation: 3;
  background-color: ${(props) =>
    props.disabled ? Colors.grey : Colors.limeGreen};
`;

const StyledText = styled.Text`
  fontsize: 16;
  lineheight: 21;
  fontweight: bold;
  letterspacing: 0.25;
  color: ${(props) =>
    props.secondary ? Colors.limeGreen : Colors.white};
`;

export default Button;
