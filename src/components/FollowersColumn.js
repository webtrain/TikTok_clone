import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../img/home.svg';
import Users from '../img/users.svg';
import MiniCard from '../components/MiniCard';


const FollowersColumn = () => {
  return (
    <div className="followers-column">
      <div className="first">
        <div className="followers-column-item">
          <img src={Home} alt="" />
          <h3>FOR YOU</h3>
        </div>
        <div className="followers-column-item">
          <img src={Users} alt="users" />
          <h3>FOLLOWING</h3>
        </div>
      </div>

      <div className="top-accounts">YOUR TOP ACCOUNTS</div>
    </div>
  );
};

export default FollowersColumn;
