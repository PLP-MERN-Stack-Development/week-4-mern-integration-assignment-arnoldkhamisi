import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Posts</Link> | <Link to="/create">Create Post</Link>
  </nav>
);
export default NavBar;