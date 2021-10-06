import React from 'react';

const ItemList = ({ data, schema }) => {
  return schema.map((item, index) => {
    return (
      <div className="flex" key={index}>
        <span className="font-bold mr-1 text-indigo-100">{item.name}: </span>
        <span className="font-semi text-yellow-400">{data[item.value]}</span>
      </div>
    );
  });
};

export default ItemList;
