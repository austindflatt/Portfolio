import React, { useContext, useEffect } from 'react'
import { Table, Checkbox, ScrollArea, Button } from '@mantine/core';
import { UserContext } from '../../../context/userContext/UserContext';
import { getUsers } from '../../../context/userContext/apiCalls';

const UsersList = () => {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <>
    <Button type="Submit" variant="light" color="green" size="sm">Add New</Button>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
              onChange={() => console.log('Clicked')}
              checked=''
              indeterminate=''
              transitionDuration={0}
              />
            </th>
            <th>Username</th>
            <th>User Since</th>
            <th>Email</th>
            <th>Company</th>
            <th>User Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        users.map((user) => {
          return (
            <tr key={user._id}>
            <td>
              <Checkbox
              checked=''
              onChange={() => console.log('Clicked')}
              transitionDuration={0}
              />
            </td>
            <td>{user.username}</td>
            <td>{user.createdAt}</td>
            <td>{user.email}</td>
            <td>{user.company}</td>
            <td>{user.message}</td>
            <td>
              <Button type="Submit" variant="light" color="red" size="sm">Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    </>
  )
}

export default UsersList