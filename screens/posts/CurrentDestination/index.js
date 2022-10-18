import react from 'react';
import React, { useContext, useEffect } from 'react';
import Container from '../../../components/ui-library/Container';
import Typography from '../../../components/ui-library/Typography';
import { CurrentDestinationContext } from '../../../contexts/CurrentDestinationContext';

export const CurrentDestination = (props) => {
  const { currentDestination } = React.useContext(
    CurrentDestinationContext
  );

  useEffect(() => {
    console.log(currentDestination, '<---currentDestination');
  }, []);
  return (
    <Container>
      <Typography>This is the current Destination Page</Typography>
    </Container>
  );
};
