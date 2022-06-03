import React, { useState, useContext, useEffect } from 'react'
import { TextInput, Table, ScrollArea, Button, Loader } from '@mantine/core';
import { MessageContext } from '../../../context/messageContext/MessageContext';
import { deleteMessage, getMessages } from '../../../context/messageContext/apiCalls';
import { Search } from 'tabler-icons-react';
import { Pagination } from '@mui/material';
import ViewMessage from './ViewMessage';

const MessagesList = () => {
  const { messages, isFetching, dispatch } = useContext(MessageContext);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [opened, setOpened] = useState(false);
  const [viewId, setViewId] = useState('');
  
  useEffect(() => {
    getMessages(dispatch);
  }, [dispatch]);
  
  const handleDelete = (id) => {
    deleteMessage(id, dispatch);
  }

  const showMessage = (id) => {
    setViewId(id)
    setOpened(true)
  }

  return (
    <>
    <ViewMessage
      viewId={viewId}
      opened={opened}
      setOpened={setOpened}
    />
    <TextInput
      size="md"
      variant="unstyled"
      placeholder="Search by sender"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={14} />}
    />
    {isFetching ?
    <Loader variant="dots" size="xl" color="green" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
    :
    <>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Sent On</th>
            <th>Message Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        messages
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .filter((message) => {
          if(search === ''){
            return true
          } else if(message.name.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((message) => {
          return (
            <tr key={message._id}>
            <td>{message.name}</td>
            <td>{message.email}</td>
            <td>{message.company}</td>
            <td>{message.createdAt}</td>
            <td>
              <Button type="Submit" variant="light" color="green" size="sm" style={{ marginRight: '10px' }} onClick={() => showMessage(message._id)}>View</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(message._id)}>Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    <Pagination
    count={(messages.length / 10).toFixed(0)}
    onChange={(_, value) => {
      setPage(value);
      window.scroll(0, 450);
    }}
    style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
    </>
    }
    </>
  )
}

export default MessagesList