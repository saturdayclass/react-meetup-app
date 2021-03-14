import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
      <h1>Meetups App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/">New Meetup</Link>
          </li>
          <li>
            <Link to="/">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
