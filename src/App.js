import { useCallback, useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const pokeData = useCallback(async () => {
    let cancel;
    const response = await axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    });
    console.log(response.data);
    setPokemon(response.data.results);
    setNextPageUrl(response.data.next);
    setPrevPageUrl(response.data.previous);
    setLoading(false);

    return () => cancel();
  }, [currentPageUrl]);

  useEffect(() => {
    setLoading(true);
    pokeData();
  }, [pokeData]);

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <div>
      <h1>POKEMON DATA</h1>
      <hr />
      {loading ? (
        'LOADING...'
      ) : (
        <div>
          <PokemonList pokemon={pokemon} />
          <hr />
          <Pagination
            nextPage={nextPageUrl ? gotoNextPage : null}
            prevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>
      )}
    </div>
  );
}

export default App;
