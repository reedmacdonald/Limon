import React from 'react';
import Typography from '../../../components/ui-library/Typography';
import Container from '../../../components/ui-library/Container';
import { Colors } from '../../../constants/Colors';

const NewPost = () => {
  return (
    <Container style={{ backgroundColor: Colors.white }}>
      <Typography>This is the new post page</Typography>
    </Container>
  );
};

export default NewPost;
