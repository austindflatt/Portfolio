import React, { useContext, useEffect } from 'react'
import { Text, Paper, Group } from '@mantine/core';
import { MessageContext } from '../../../context/messageContext/MessageContext';
import { getMessages } from '../../../context/messageContext/apiCalls';
import { Message } from 'tabler-icons-react';

const Messages = () => {
  const { messages, dispatch } = useContext(MessageContext);
  
  useEffect(() => {
    getMessages(dispatch);
  }, [dispatch]);
  
  return (
  <>
  <Paper withBorder radius="sm" p="lg">
    <Group position="apart">
      <Text color="dimmed" size="sm" transform="uppercase" weight={700}>
        Messages
      </Text>
      <Message size={22} />
    </Group>
    
    <Group align="flex-end" spacing="xs" mt={25}>
      <Text style={{ fontSize: 24, fontWeight: 700, lineHeight: 1 }}>{messages.length}</Text>
    </Group>
  </Paper>
  </>
  )
}

export default Messages;