import { Text, View } from 'react-native';
import Button from '../../components/Button';
import { Bar as ProgressBar } from 'react-native-progress';
import Container from '../../components/Container';
import React from 'react';
import { Colors } from '../../constants/Colors';
import Option from '../../components/Options';
import styled from 'styled-components/native';
import { interests } from '../../constants/interests';

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Interests = ({ navigation }) => {
  const [selected, setSelected] = React.useState([
    [],
    [],
    [],
    [],
    [],
  ]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const addSelected = (num) => {
    let newSelected = [...selected];
    newSelected[pageNumber].push(num);
    setSelected(newSelected);
  };
  const clickNext = () => {
    setPageNumber(pageNumber + 1);
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
        <Text>I enjoy spending my time</Text>
        <Text>
          Select 5 tags that best resonate with the activities you
          enjoy on a day off
        </Text>
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
