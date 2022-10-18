import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../constants/Colors';

export const NewPhoto = ({ children, ...props }) => {
  return (
    <Box {...props}>
      <Text>{children}</Text>
    </Box>
  );
};

const Text = styled.Text``;

const Box = styled.Pressable`
  height: 100px;
  width: 100px;
  background-color: ${Colors.grey};
  justify-content: center;
  align-items: center;
`;
