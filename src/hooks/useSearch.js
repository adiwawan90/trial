import { useState } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return {
    search,
    onChangeSearch,
  };
}

export default useSearch;
