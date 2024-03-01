import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { fetchShowData } from '../../store/showSlice/showThunks';

const Show: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  console.log(params.id);

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
      <h1>Show info</h1>
    </div>
  );
};

export default Show;
