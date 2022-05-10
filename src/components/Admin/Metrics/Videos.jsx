import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { VideoContext } from '../../../context/videoContext/VideoContext';
import { getVideos } from '../../../context/videoContext/apiCalls';

const Videos = () => {
  const { videos, dispatch } = useContext(VideoContext);
  
  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="md" p="md" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          Videos
        </Text>
        <Text weight={700} size="xl">{videos.length}</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default Videos;