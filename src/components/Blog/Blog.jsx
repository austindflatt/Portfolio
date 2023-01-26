import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ContainerSmall from '../styles/ContainerSmall';
import { BlogHome, BlogHomeCard, BlogImage, ImageBox } from '../styles/Blogs';
import { Button, Tooltip, Anchor } from '@mantine/core';
import projects from '../data/projects.json';
import { Code } from 'tabler-icons-react';
import axios from 'axios';
import ToText from '../../utils/ToText';

const LatestPosts = () => {
	const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@austindflatt";
	const [profile, setProfile] = useState({
		name: 'Austin Flatt',
		profileImage: '',
		profileUrl: '',
	})
	const [blog, setBlog] = useState({
		item: [],
		isLoading: true,
		error: null,
	})

	useEffect(() => {
	  axios.get(mediumURL)
	  .then(info => {
		const image = info.data.feed.image;
		const link = info.data.feed.link;
		const blogs = info.data.items;
		const posts = blogs.filter(post => post.categories.length > 0)

		setProfile(p => ({...p, profileUrl: link, profileImage: image}))
		setBlog({item: posts, isLoading: false})
	  })
	  .catch(err => setBlog({error: err.message}))
	}, [axios])

  function truncateText(text, start, len) {
    return text.length > len ? `${text.slice(start, len)}...` : text;
  }

  const haveBlogs = () => {
    if(blog.item) {
      return blog.item.map((post, index) => {
        <a href={post.link} key={index}>
          <div className="card--article-preview">
            <div className="article-preview__body">
              <h3 style={{ lineHeight: 0 }}>📝</h3>
              <div>
                <strong>{truncateText(post.title, 0, 80)}</strong>
                <br />
                <small>1 min read</small>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </a>
      })
    }
  }

	return (
	<>
	<ContainerSmall>
	  <h2 style={{ textAlign: 'left' }} id="blog">Recent Posts</h2>
    <p>No posts to show.</p>
    {/* {blog.isLoading ? 'Loading...' : haveBlogs()} */}
	  <br /><br />
	</ContainerSmall>
	</>
	)
  }

export default LatestPosts;