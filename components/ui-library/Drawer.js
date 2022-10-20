import React from 'react';
import styled from 'styled-components/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Drawer = (props) => {
  return (
    <StyledPressable onPress={props.onPress}>
      <Ionicons name={'reorder-three-outline'} size={32} />
    </StyledPressable>
  );
};

const StyledPressable = styled.Pressable`
  position: absolute;
  top: 0;
  right: 0;
`;
