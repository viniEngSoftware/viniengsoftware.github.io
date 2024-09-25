import React, { useState, useEffect, useRef } from 'react';
import usePostIntagramStyles from '../styles/InstagramGallery';

interface InstagramPost{
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  media_type: string;
}

const mockInstagramPosts: InstagramPost[] = [
    { id: '1', caption: 'Post 1', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
    { id: '2', caption: 'Post 2', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
    { id: '3', caption: 'Post 3', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
    { id: '4', caption: 'Post 4', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
    { id: '5', caption: 'Post 5', media_url: 'https://via.placeholder.com/150', permalink: '#', media_type: 'IMAGE' },
  ];

  const InstagramPost: React.FC = () => {
    const classes = usePostIntagramStyles();
    const PostTamanho = mockInstagramPosts.length;

    const currentIndexRef = useRef(0);
    


    return (
        <>

        </>
    );
  };

  export default InstagramPost;