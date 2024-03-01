import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchShowData } from '../../store/showSlice/showThunks';
import { selectShow } from '../../store/showSlice/showSlice';

const Show: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { name, rating, image, summary, genres } = useAppSelector(selectShow);

  const fetchData = async () => {
    if (params.id) {
      await dispatch(fetchShowData(params.id));
    }
  };
  useEffect(() => {
    fetchData();
  }, [params.id, dispatch]);
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body clearfix'>
          <img src={image} alt='poster' className='float-start' />

          <div className='card-title'>{name}</div>
        </div>
      </div>
      <span>{rating}</span>
      <p>{summary}</p>
      <p>{genres}</p>
    </div>
  );
};

export default Show;
