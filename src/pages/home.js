import { SearchBox } from '../components/SearchBox';
import { useEffect, useState } from 'react';
import movies from '../constans/api/movies';

import useSearch from '../hooks/useSearch';

import RenderList from '../parts/List';

import { MOVIES } from '../dummies/movies';

function App() {
  const [data, setData] = useState(() => []);

  const { search, onChangeSearch } = useSearch();

  useEffect(() => {
    // try {
    //   const response = movies.all({
    //     params: { apikey: 'faf7e5bb', s: 'Batman', page: 2 },
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
    // movies
    //   .all({ params: { apikey: 'faf7e5bb', s: 'Batman', page: 2 } })
    //   .then((res) => setData(res.Search))
    //   .catch((err) => console.log(err));
    setData(MOVIES.Search);
    // setData([]);
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="container mx-auto mt-14">
        <div className="flex justify-center items-center">
          <SearchBox
            placeholder="Search Movies By Name"
            handleChange={onChangeSearch}
          />
        </div>
        <RenderList data={data} />
      </div>
    </>
  );
}

export default App;
