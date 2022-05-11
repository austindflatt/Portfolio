import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { MessageContext } from '../../../context/messageContext/MessageContext';
import { getMessages } from '../../../context/messageContext/apiCalls';

const Messages = () => {
  const { messages, dispatch } = useContext(MessageContext);
  
  useEffect(() => {
    getMessages(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="sm" p="lg" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
          Messages
        </Text>
        <Text weight={700} size="xl">{messages.length}</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default Messages;