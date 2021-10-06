import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ListDetails from '../parts/Details';
import movies from '../constans/api/movies';
import { MOVIE_DETAIL } from '../dummies/movies';
import { populateDetails } from '../store/action/movie';

const DetailMovie = () => {
  const [detail, setDetail] = useState(MOVIE_DETAIL);
  const { id } = useParams();

  const getDetails = async (id) => {
    const response = await movies.details(id);
    console.log('HEY', response);
  };

  useEffect(() => {
    getDetails(id);
  }, [id]);

  console.log(id);
  return (
    <>
      <div className="flex justify-center items-center w-full p-24">
        <figure className="item-image mr-5 w-1/3">
          <img
            src={detail.Poster}
            alt={detail.Poster}
            className="w-full h-full cursor-pointer object-cover rounded-md"
          />
        </figure>
        <ListDetails detail={detail} />
      </div>
    </>
  );
};

export default DetailMovie;
