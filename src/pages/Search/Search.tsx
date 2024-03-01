import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateSearch } from '../../store/searchSlice/searchSlice';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { fetchSearchResults } from '../../store/showsSlice/showsThunks';
import { selectTvShows } from '../../store/showsSlice/showsSlice';
import { ApiShow } from '../../types';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tvShows = useAppSelector(selectTvShows);

  const handleOnSearch = async (value: string, results: ApiShow[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(value, results);
    dispatch(updateSearch(value));
    await dispatch(fetchSearchResults());
  };

  const handleOnSelect = (item: ApiShow) => {
    const id = item.id.toString();
    navigate('/shows/' + id);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center py-4'>
        <div className='col-lg-4'>
          <p className='fs-5 mb-1'>Search for TV Show:</p>
          <ReactSearchAutocomplete
            items={tvShows}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
