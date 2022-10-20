import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Material from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Logo } from '../../../components/ui-library/LimonLogo';
import DayTrip from '../../../components/DayTrip';
import { Drawer } from '../../../components/ui-library/Drawer';
import InputText from '../../../components/ui-library/TextInput';
import Typography from '../../../components/ui-library/Typography';
import { Colors } from '../../../constants/Colors';
import { EventMock as DATA } from '../../../mocks/EventMocks';
import {
  BottomFlatlist,
  DayTripHolder,
  FlatList,
  IconHolder,
  IconSubHolder,
  Image,
  ScrollView,
  StyledContainer as Container,
} from './styles';

const Posts = ({ navigation, route, ...props }) => {
  const [category, setCategory] = useState(route.params.category);

  const renderItem = (props) => {
    return (
      <DayTripHolder>
        <DayTrip {...props.item} navigation={navigation} />
      </DayTripHolder>
    );
  };

  return (
    <Container>
      <ScrollView>
        <Logo />
        <Drawer onPress={navigation.toggleDrawer} />
        <InputText
          wrapperStyle={{ borderRadius: 15 }}
          icon={
            <Ionicons
              name={'ios-search'}
              size={15}
              color={Colors.grey}
            />
          }
          placeholder={'events, restaurants, activities...'}
        />
        <InputText
          wrapperStyle={{ borderRadius: 15, marginTop: 10 }}
          icon={
            <Ionicons
              name={'location'}
              size={15}
              color={Colors.grey}
            />
          }
          placeholder={'neighborhood, city, state, or zip code'}
        />
        {category == 'All' ? (
          <View>
            <IconHolder>
              <IconSubHolder>
                <Material name={'ticket'} size={30} />
                <Typography>Events</Typography>
              </IconSubHolder>
              <IconSubHolder>
                <Ionicons name={'fast-food'} size={30} />
                <Typography>Dining</Typography>
              </IconSubHolder>
              <IconSubHolder>
                <Ionicons name={'wine'} size={30} />
                <Typography>Drinks</Typography>
              </IconSubHolder>
              <IconSubHolder>
                <Entypo name={'dots-three-horizontal'} size={30} />
                <Typography>More</Typography>
              </IconSubHolder>
            </IconHolder>
            <Typography header>Entertainment</Typography>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
            />
            <Typography header>Dining</Typography>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
            />
            <Typography header>Drinks</Typography>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
            />
            <Typography header>More</Typography>
            <BottomFlatlist
              data={DATA}
              renderItem={renderItem}
              horizontal
            />
          </View>
        ) : (
          <View>
            <Typography style={{ marginVertical: 10 }}>
              Showing serach results for "{category}"{' '}
              <Typography bold>Search again</Typography>
            </Typography>
            <FlatList data={DATA} renderItem={renderItem} />
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default Posts;
