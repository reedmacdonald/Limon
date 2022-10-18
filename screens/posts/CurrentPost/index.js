import react from 'react';
import React, { useContext, useEffect } from 'react';
import Container from '../../../components/ui-library/Container';
import Typography from '../../../components/ui-library/Typography';
import { CurrentPostContext } from '../../../contexts/CurrentPostContext';

export const CurrentPost = (props) => {
  const { currentPost } = React.useContext(CurrentPostContext);

  useEffect(() => {
    console.log(currentPost, '<---currentPost');
  }, []);
  return (
    <Container>
      <Typography>This is the currentPost Page</Typography>
    </Container>
  );
};
