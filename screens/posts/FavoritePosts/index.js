import React, { useState } from 'react';
import Typography from '../../../components/ui-library/Typography';
import Logo from '../../../assets/logo.png';
import {
  StyledContainer as Container,
  DayTripHolder,
  FlatList,
  Image,
  ScrollView,
} from '../Posts/styles';
import { EventMock as DATA } from '../../../mocks/EventMocks';
import DayTrip from '../../../components/DayTrip';
import Ionicons from '@expo/vector-icons/Ionicons';
import Material from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, View } from 'react-native';

const FavoritePosts = ({ navigation, route, ...props }) => {
  const renderItem = (props) => {
    return (
      <DayTripHolder>
        <DayTrip {...props.item} navigation={navigation} isFavorite />
      </DayTripHolder>
    );
  };

  return (
    <Container>
      <ScrollView>
        <View>
          <Image resizeMode={'contain'} source={Logo} />
        </View>
        <Typography header>Favorites</Typography>
        <View>
          <FlatList data={DATA} renderItem={renderItem} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default FavoritePosts;
