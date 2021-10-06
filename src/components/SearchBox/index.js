import React from 'react';

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      className="border-0 outline-none p-2 w-80 mb-8"
    />
  );
};
