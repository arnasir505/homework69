import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <nav className='navbar bg-purple shadow'>
      <div className='container'>
        <Link className='navbar-brand text-white' to='/'>
          TV Shows
        </Link>
      </div>
    </nav>
  );
};

export default Header;
