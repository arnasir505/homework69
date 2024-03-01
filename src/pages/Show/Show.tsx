import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchShowData } from '../../store/showSlice/showThunks';
import { selectShow, selectShowLoading } from '../../store/showSlice/showSlice';
import Spinner from '../../components/Spinner/Spinner';
import { Rating } from 'react-simple-star-rating';
import { fillColorArray } from '../../constants';

const Show: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { name, rating, image, summary, genres } = useAppSelector(selectShow);
  const isLoading = useAppSelector(selectShowLoading);
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-xl-6'>
            <div className='card'>
              <div className='card-body clearfix'>
                <img
                  src={
                    image
                      ? image
                      : 'https://fakeimg.pl/210x295?text=Poster&font=bebas'
                  }
                  alt='poster'
                  className='float-md-start mb-2 mb-md-0 me-md-3 poster'
                />
                <h2 className='card-title mb-1'>{name}</h2>
                {genres.length > 0 ? (
                  <p className='text-secondary mb-0'>{genres.join(', ')}</p>
                ) : null}
                {rating ? (
                  <div className='d-flex'>
                    <Rating
                      initialValue={rating}
                      iconsCount={10}
                      size={20}
                      readonly
                      allowFraction
                      fillColorArray={fillColorArray}
                    />
                    <p className='fw-bold pt-1 ms-2 mb-0'>{rating}</p>
                  </div>
                ) : (
                  <span>No rating</span>
                )}
                {summary ? (
                  <p
                    className='mt-2'
                    dangerouslySetInnerHTML={{ __html: summary }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
