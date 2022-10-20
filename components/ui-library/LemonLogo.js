import react from 'react';
import styled from 'styled-components/native';
import Lemon from '../../assets/lemon.png';

export const LemonLogo = () => {
  return <Image source={Lemon} />;
};

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;
