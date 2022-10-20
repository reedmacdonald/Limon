import React from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/logo.png';

export const Logo = (props) => {
  return <Image alt={'Limon'} source={Logo} {...props} />;
};
