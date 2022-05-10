import React, { useState, useContext, useEffect } from 'react'
import { TextInput, Table, Checkbox, ScrollArea, Button } from '@mantine/core';
import { VideoContext } from '../../../context/videoContext/VideoContext';
import { deleteVideo, getVideos } from '../../../context/videoContext/apiCalls';
import { Link } from "react-router-dom";
import { Search } from 'tabler-icons-react';

const VideoList = () => {
  const { videos, dispatch } = useContext(VideoContext);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);
  
  const handleDelete = (id) => {
    deleteVideo(id, dispatch);
  }

  return (
    <>
    <Button type="Submit" variant="light" color="green" size="sm">Add New</Button>
    <TextInput
      size="md"
      placeholder="Search by title"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
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
            <th>Title</th>
            <th>Added On</th>
            <th>Link</th>
            <th>Video Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        videos
        .filter((video) => {
          if(search === ''){
            return true
          } else if(video.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((video) => {
          return (
            <tr key={video._id}>
            <td>
              <Checkbox
              checked=''
              onChange={() => console.log('Clicked')}
              transitionDuration={0}
              />
            </td>
            <td>{video.title}</td>
            <td>{video.createdAt}</td>
            <td><Link to={video.videoLink}>View Video</Link></td>
            <td>
              <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }}>Edit</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(video._id)}>Delete</Button>
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

export default VideoList