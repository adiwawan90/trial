import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import MoviesPoster from './movies-poster';

const RenderItem = ({ item }) => {
  return (
    <>
      <div className="flex border border-gray-500 p-2 m-2 rounded w-2/3">
        <MoviesPoster data={item?.Poster || ''} />
        <div className="flex flex-col p-2">
          <Link to={`/details/${item?.imdbID}`}>
            <p className="text-2xl text-indigo-50 hover:text-indigo-200 cursor-pointer">
              {item?.Title}
            </p>
          </Link>
          <p className="text-indigo-50">Release year: {item?.Year}</p>
          <span className="text-indigo-50">Type: {item?.Type}</span>
        </div>
      </div>
    </>
  );
};

export default withRouter(RenderItem);
