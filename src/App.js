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
      <h1 className="text-center text-4xl font-bold text-green-600">
        POKEMON DATA
      </h1>
      <div className="flex h-[140px] w-full justify-center border-4 border-solid border-rose-600 p-4">
        <img
          className="absolute left-2 h-[100px]"
          src={logotext}
          alt="pokemon-logo"
        />

        <img
          className="absolute right-2 h-[100px]"
          src={logo}
          alt="pokemon-logo"
        />
      </div>

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
