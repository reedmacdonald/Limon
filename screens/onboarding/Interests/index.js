import React, { useContext } from 'react';
import { Bar as ProgressBar } from 'react-native-progress';
import Button from '../../../components/ui-library/Button';
import Option from '../../../components/ui-library/Options';
import Typography from '../../../components/ui-library/Typography';
import { Colors } from '../../../constants/Colors';
import { interests } from '../../../constants/interests';
import { Paths } from '../../../constants/NavigationPaths';
import { UserContext } from '../../../contexts/UserContext';
import { StyledView, ButtonHolder, StyledContainer } from './styles';

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
  const removeSelected = (num) => {
    let newSelected = [...selected];
    const index = newSelected[pageNumber].indexOf(num);
    if (index > -1) {
      newSelected[pageNumber].splice(index, 1);
    }
    setSelected(newSelected);
  };

  const clickNext = () => {
    if (pageNumber < interests.length - 1) {
      setPageNumber(pageNumber + 1);
    } else {
      setUserProperty({ interests: selected });
      navigation.navigate(Paths.userNavigation, {
        screen: Paths.userprofile,
      });
    }
  };

  const disabled = selected[pageNumber].length < 5;
  return (
    <StyledContainer>
      <ProgressBar
        borderColor={Colors.charcoal}
        unfilledColor={Colors.charcoal}
        color={Colors.limeGreen}
        progress={pageNumber / interests.length}
        width={300}
      />
      <Typography fullWidth header>
        I enjoy spending my time
      </Typography>
      <Typography fullWidth>
        Select 5 tags that best resonate with the activities you enjoy
        on a day off
      </Typography>
      <StyledView>
        {interests[pageNumber].map((value, index) => {
          const isSelected = selected[pageNumber].includes(index);
          return (
            <Option
              key={value}
              onPress={() => {
                if (!isSelected) {
                  addSelected(index);
                } else {
                  removeSelected(index);
                }
              }}
              title={value}
              selected={isSelected}
            ></Option>
          );
        })}
      </StyledView>
      <ButtonHolder>
        <Button
          disabled={disabled}
          type="circle"
          title="+"
          onPress={clickNext}
        ></Button>
      </ButtonHolder>
    </StyledContainer>
  );
};

export default Interests;
