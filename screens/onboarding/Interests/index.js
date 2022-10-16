import { View } from 'react-native';
import Button from '../../../components/ui-library/Button';
import { Bar as ProgressBar } from 'react-native-progress';
import Container from '../../../components/ui-library/Container';
import React, { useContext } from 'react';
import { Colors } from '../../../constants/Colors';
import Option from '../../../components/ui-library/Options';
import { interests } from '../../../constants/interests';
import Typography from '../../../components/ui-library/Typography';
import { UserContext } from '../../../contexts/UserContext';
import { StyledView } from './styles';

const Interests = ({ navigation }) => {
  const [selected, setSelected] = React.useState([
    [],
    [],
    [],
    [],
    [],
  ]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const { setUserProperty } = useContext(UserContext);
  const addSelected = (num) => {
    let newSelected = [...selected];
    newSelected[pageNumber].push(num);
    setSelected(newSelected);
  };
  const clickNext = () => {
    if (pageNumber < interests.length - 1) {
      setPageNumber(pageNumber + 1);
    } else {
      setUserProperty({ interests: selected });
      navigation.navigate('UserNavigation', { page: 'UserProfile' });
    }
  };
  return (
    <Container>
      <View style={{ width: '80%' }}>
        <ProgressBar
          borderColor={Colors.charcoal}
          unfilledColor={Colors.charcoal}
          color={Colors.limeGreen}
          progress={pageNumber / interests.length}
          width={300}
        />
        <Typography header>I enjoy spending my time</Typography>
        <Typography>
          Select 5 tags that best resonate with the activities you
          enjoy on a day off
        </Typography>
        <StyledView>
          {interests[pageNumber].map((value, index) => {
            return (
              <Option
                key={value}
                onPress={() => {
                  addSelected(index);
                }}
                title={value}
                selected={selected[pageNumber].includes(index)}
              ></Option>
            );
          })}
        </StyledView>
        {
          <View
            style={{
              width: '80%',
              alignItems: 'flex-end',
            }}
          >
            <Button
              disabled={selected[pageNumber].length < 5}
              type="circle"
              title="+"
              onPress={clickNext}
            ></Button>
          </View>
        }
      </View>
    </Container>
  );
};

export default Interests;
