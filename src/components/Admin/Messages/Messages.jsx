import React from 'react';
import { Helmet } from "react-helmet";
import MessagesList from './MessagesList';

const Messages = () => {
  return (
    <>
    <Helmet>
      <title>Manage Messages | Austin Flatt</title>
      <meta name='description' content='Manage Messages' />
      <meta name='keywords' content='Austin Flatt, austin flatt, louisville software developer, software engineer, software engineering job, louisville coder, hire software engineer, hire louisville software developer' />
    </Helmet>
    <MessagesList />
    </>
  )
}

export default Messages