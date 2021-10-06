import React from 'react';
import RenderItem from './render-item';

const List = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {data.length > 0 &&
          data?.map((item) => {
            return <RenderItem item={item} key={item?.imdbID} />;
          })}
      </div>
    </>
  );
};

export default List;
