import { useCallback, useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Pagination from './components/Pagination';
import logo from './images/logo.png';
import logotext from './images/logotext.png';

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
      <h1 className="m-4 text-center text-4xl font-bold text-green-600">
        POKEDEX
      </h1>
      <div className="m-4 flex h-[140px] justify-center rounded-2xl border-4 border-solid border-purple-200 bg-purple-200 p-4">
        <img className="h-[100px]" src={logotext} alt="pokemon-logo" />

        <img className="h-[100px]" src={logo} alt="pokemon-logo" />
      </div>

      {loading ? (
        'LOADING...'
      ) : (
        <div>
          <Pagination
            nextPage={nextPageUrl ? gotoNextPage : null}
            prevPage={prevPageUrl ? gotoPrevPage : null}
          />
          <PokemonList pokemon={pokemon} />
          <hr />
        </div>
      )}
    </div>
  );
}

export default App;
