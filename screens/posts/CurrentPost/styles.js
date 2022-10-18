import styled from 'styled-components';
import Container from '../../../components/ui-library/Container';

export const HeaderImage = styled.Image`
  width: 100%;
  height: 100px;
`;

export const GalleryHolder = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const GalleryImage = styled.Image`
  width: 30%;
  height: 100px;
  margin: 5px;
`;

export const StyledContainer = styled(Container)`
  width: 100%;
  justify-content: space-between;
`;

export const BottomContainer = styled.View`
  padding-horizontal: 20px;
  min-height: 400px;
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
`;
