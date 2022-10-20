import React from 'react';
import { Image, View } from 'react-native';
import MainLogo from '../../assets/logo.png';

export const Logo = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        alt={'Limon'}
        source={MainLogo}
        {...props}
        resizeMode="contain"
      />
    </View>
  );
};
