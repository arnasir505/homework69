import React from 'react';

const Search: React.FC = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center py-4'>
        <div className='col-lg-4'>
          <label htmlFor='search' className='fs-5 mb-1'>
            Search for TV Show:
          </label>
          <input className='form-control' type='text' id='search' />
        </div>
      </div>
    </div>
  );
};

export default Search;
