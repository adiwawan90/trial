import { SearchBox } from '../components/SearchBox';
import { useEffect, useState } from 'react';
import movies from '../constans/api/movies';

import useSearch from '../hooks/useSearch';

import RenderList from '../parts/List';

import { MOVIES } from '../dummies/movies';

function App() {
  const [data, setData] = useState(() => []);

  const { search, onChangeSearch } = useSearch();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        loadMovieList(search, page);
      }
    }
  };

  // useEffect(() => {
  //   if (search) loadMovieList(search, page);
  // }, [search]);

  const submit = () => loadMovieList(search, page);

  const loadMovieList = (search, page) => {
    setLoading(true);
    setTimeout(() => {
      movies
        .all({ params: { apikey: 'faf7e5bb', s: search, page: page } })
        .then((res) => {
          console.log('res', res);
          const newPage = page + 1;
          const newList = data.concat(res.Search);
          setData(newList);
          setPage(newPage);
          if (res.Search.length === 0) setNoData(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1500);
  };

  return (
    <>
      <div className="container mx-auto mt-14">
        <div className="flex justify-center">
          <SearchBox
            placeholder="Search Movies By Name"
            handleChange={onChangeSearch}
          />
          <div className="">
            <button
              onClick={submit}
              className="bg-green-500 h-10 ml-1 p-2 rounded"
            >
              Search
            </button>
          </div>
        </div>
        <RenderList data={data} />
        {loading ? (
          <div className="text-center text-indigo-50">loading data ...</div>
        ) : (
          ''
        )}
        {noData ? <div className="text-center">no data anymore ...</div> : ''}
      </div>
    </>
  );
}

export default App;
