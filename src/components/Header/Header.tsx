import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className='navbar bg-primary bg-opacity-75'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          TV Shows
        </Link>
      </div>
    </nav>
  );
};

export default Header;
