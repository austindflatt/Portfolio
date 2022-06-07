import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { VideoContext } from '../../../context/videoContext/VideoContext';
import { getVideos } from '../../../context/videoContext/apiCalls';
import { Video } from 'tabler-icons-react';

const Videos = () => {
  const { videos, dispatch } = useContext(VideoContext);
  
  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="sm" p="lg">
    <Group position="apart">
      <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
        Videos
      </Text>
      <Video size={22} />
    </Group>
    
    <Group align="flex-end" spacing="xs" mt={25}>
      <Text style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>{videos.length}</Text>
    </Group>
  </Paper>
  </>
  )
}

export default Videos;