import React from 'react';
import styled from 'styled-components/native';

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
  background-color: grey;
  justify-content: center;
  align-items: center;
`;
