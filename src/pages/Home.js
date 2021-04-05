import React, { useEffect } from 'react';
import FollowersColumn from '../components/FollowersColumn';
import Feed from '../components/Feed';
import Suggested from '../components/Suggested';
import axios from 'axios';

const Home = () => {
  const addData = async () => {
    await axios.post('.netlify/functions/addData');
  };

  const fetchData = async () => {
    const results = await axios.get('.netlify/functions/posts');
  };

  useEffect(() => {
    addData();
  }, []);

  return (
    <div className="container home">
      <FollowersColumn />
      <Feed />
      <Suggested />
    </div>
  );
};

export default Home;
