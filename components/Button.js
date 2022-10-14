import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../constants/Colors';
import { Text } from 'react-native';

const Button = ({
  onPress,
  title,
  disabled = false,
  secondary = false,
  type = 'default',
  style,
}) => {
  if (type == 'circle') {
    return (
      <StyledCircle disabled={disabled} onPress={onPress}>
        <Text style={{ color: 'white' }}>{title}</Text>
      </StyledCircle>
    );
  } else {
    return (
      <StyledPressable
        disabled={disabled}
        secondary={secondary}
        onPress={onPress}
        style={style}
      >
        <StyledText disabled={disabled} secondary={secondary}>
          {title}
        </StyledText>
      </StyledPressable>
    );
  }
};

const StyledPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding-vertical: 12px;
  padding-horizontal: 90px;
  border-radius: 30px;
  margin-top: 20px;
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

const StyledCircle = styled(StyledPressable)`
  width: 50;
  height: 50;
  padding-horizontal: 0;
  border-radius: 25;
`;

export default Button;
