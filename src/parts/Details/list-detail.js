import React from 'react';
import { schema } from './utils';
import ListItem from './list-item';

const ListDetail = ({ detail }) => {
  return (
    <div className="flex flex-col w-2/3">
      <h1 className="text-4xl text-indigo-50 mb-3">
        {detail?.Title || 'Movies Title'}
      </h1>
      <ListItem data={detail} schema={schema} />
    </div>
  );
};

export default ListDetail;
