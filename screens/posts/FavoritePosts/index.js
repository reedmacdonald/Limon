import React from 'react';
import { View } from 'react-native';
import Logo from '../../../assets/logo.png';
import DayTrip from '../../../components/DayTrip';
import Typography from '../../../components/ui-library/Typography';
import { EventMock as DATA } from '../../../mocks/EventMocks';
import {
  DayTripHolder,
  FlatList,
  Image,
  ScrollView,
  StyledContainer as Container,
} from '../Posts/styles';

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
