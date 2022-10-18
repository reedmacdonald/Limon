import React from 'react';
import Typography from '../../../components/ui-library/Typography';
import Logo from '../../../assets/logo.png';
import {
  StyledContainer as Container,
  StyledInputText,
  DayTripHolder,
  FlatList,
  ScrollView,
  Image,
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
      <ScrollView
        style={{
          paddingTop: 50,
          paddingBottom: 200,
        }}
      >
        <Image
          resizeMode={'contain'}
          style={{
            height: 60,
            width: '100%',
            paddingTop: 20,
          }}
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
        <FlatList
          data={DATA}
          renderItem={renderItem}
          horizontal
          style={{ marginBottom: 50 }}
        />
      </ScrollView>
    </Container>
  );
};

export default Posts;
