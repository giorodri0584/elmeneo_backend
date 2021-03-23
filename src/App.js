import React from 'react';
import Container from '@material-ui/core/Container';

//youtube key AIzaSyAMtP2XSE1JEAYaWoHDxueVv88b5-yQmW0

import YoutubeVideo from './components/youtube_video/youtube_video';

const App = () => {
  return (
    <Container maxWidth="md">
      <YoutubeVideo />
    </Container>
  );
}

export default App;