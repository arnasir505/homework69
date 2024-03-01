import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateSearch } from '../../store/searchSlice';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { fetchSearchResults } from '../../store/showsThunks';
import { selectTvShows } from '../../store/showsSlice';
import { ApiShow } from '../../types';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const tvShows = useAppSelector(selectTvShows);

  const handleOnSearch = (value: string, results: ApiShow[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(value, results);
    dispatch(updateSearch(value));
    dispatch(fetchSearchResults());
  };

  return (
    <div className='container'>
      <div className='row justify-content-center py-4'>
        <div className='col-lg-4'>
          <p className='fs-5 mb-1'>Search for TV Show:</p>
          <ReactSearchAutocomplete items={tvShows} onSearch={handleOnSearch} />
        </div>
      </div>
    </div>
  );
};

export default Search;
