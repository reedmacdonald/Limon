import React from 'react';
import Typography from '../../../components/ui-library/Typography';
import { Image } from 'react-native';
import Logo from '../../../assets/logo.png';
import {
  StyledContainer as Container,
  StyledInputText,
  DayTripHolder,
  FlatList,
  ScrollView,
} from './styles';
import { EventMock as DATA } from '../../../mocks/EventMocks';
import DayTrip from '../../../components/DayTrip';
import Ionicons from '@expo/vector-icons/Ionicons';

const Posts = ({ navigation }) => {
  const renderItem = (props) => {
    return (
      <DayTripHolder>
        <DayTrip {...props.item} />
      </DayTripHolder>
    );
  };

  return (
    <Container>
      <ScrollView>
        {/*<Ionicons
          name="md-checkmark-circle"
          size={32}
          color="green"
  />*/}
        <Image
          resizeMode={'contain'}
          style={{ height: 60, width: '100%' }}
          source={Logo}
        />
        <StyledInputText
          placeholder={'events, city, state or zip code'}
        />
        <StyledInputText
          placeholder={'events, restaurants, activities...'}
        />
        <Typography header>Entertainment</Typography>
        <FlatList data={DATA} renderItem={renderItem} horizontal />
        <Typography header>Dining</Typography>
        <FlatList data={DATA} renderItem={renderItem} horizontal />
        <Typography header>Drinks</Typography>
        <FlatList data={DATA} renderItem={renderItem} horizontal />
        <Typography header>More</Typography>
        <FlatList data={DATA} renderItem={renderItem} horizontal />
      </ScrollView>
    </Container>
  );
};

export default Posts;