import React, { useContext } from 'react';
import { Logo } from '../../../components/ui-library/LimonLogo';
import DayTrip from '../../../components/DayTrip';
import Typography from '../../../components/ui-library/Typography';
import { DayTripsContext } from '../../../contexts/DayTripsContext';
import {
  DayTripHolder,
  FlatList,
  Image,
  ScrollView,
  StyledContainer as Container,
} from '../Posts/styles';

const FavoritePosts = ({ navigation, route, ...props }) => {
  const { dayTrips } = useContext(DayTripsContext);
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
        <Logo style={{ width: 100, height: 50 }} />
        <Typography header>Favorites</Typography>
        <FlatList data={dayTrips} renderItem={renderItem} />
      </ScrollView>
    </Container>
  );
};

export default FavoritePosts;
