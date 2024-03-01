import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { updateSearch } from '../../store/searchSlice';

const Search: React.FC = () => {

  const dispatch = useAppDispatch();

  return (
    <div className='container'>
      <div className='row justify-content-center py-4'>
        <div className='col-lg-4'>
          <label htmlFor='search' className='fs-5 mb-1'>
            Search for TV Show:
          </label>
          <input className='form-control' type='text' id='search' onChange={(e) => dispatch(updateSearch(e.target.value))}/>
        </div>
      </div>
    </div>
  );
};

export default Search;
