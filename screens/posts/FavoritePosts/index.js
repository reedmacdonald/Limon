import React from 'react';
import { Logo } from '../../../components/ui-library/LimonLogo';
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
        <Logo />
        <Typography header>Favorites</Typography>
        <FlatList data={DATA} renderItem={renderItem} />
      </ScrollView>
    </Container>
  );
};

export default FavoritePosts;
