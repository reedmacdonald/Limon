import React, { useState } from 'react';
import Typography from '../../../components/ui-library/Typography';
import Logo from '../../../assets/logo.png';
import {
  StyledContainer as Container,
  DayTripHolder,
  FlatList,
  ScrollView,
  Image,
  IconHolder,
  IconSubHolder,
} from './styles';
import { EventMock as DATA } from '../../../mocks/EventMocks';
import DayTrip from '../../../components/DayTrip';
import Ionicons from '@expo/vector-icons/Ionicons';
import Material from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '../../../constants/Colors';
import InputText from '../../../components/ui-library/TextInput';
import { Pressable, View } from 'react-native';

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
        <Image resizeMode={'contain'} source={Logo} />
        <Pressable
          style={{ position: 'absolute', top: 0, right: 0 }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Ionicons name={'reorder-three-outline'} size={32} />
        </Pressable>
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
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
              style={{ marginBottom: 50 }}
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
