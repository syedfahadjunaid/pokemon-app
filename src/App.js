import { useCallback, useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import axios from 'axios';
import Pagination from './components/Pagination';
import logo from './images/logo.png';
import logotext from './images/logotext.png';
import Route from './components/Route';
import PokeInformation from './pages/Pokeinformation';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  const [pokeUrl, setPokeUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon/1/'
  );

  const pokeData = useCallback(async () => {
    let cancel;
    const response = await axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    });
    // console.log(response.data);
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

  // console.log(pokeId);
  // console.log(pokemon);
  // console.log(pokeUrl);

  return (
    <div>
      <h1 className="m-4 animate-pulse text-center text-4xl font-extrabold text-gray-600">
        POKEDEX - JUNAID
      </h1>
      <div className="m-4 flex h-[140px] justify-center rounded-2xl border-4 border-solid border-purple-200 bg-purple-200 p-4">
        <img className="h-[100px] " src={logotext} alt="pokemon-logo" />

        <img className="h-[100px] animate-spin" src={logo} alt="pokemon-logo" />
      </div>
      {loading ? (
        'LOADING...'
      ) : (
        <div>
          <Route path="/pokeinformation">
            <PokeInformation pokemon={pokemon} pokeUrl={pokeUrl} />
          </Route>
          <Route path="/">
            <Pagination
              nextPage={nextPageUrl ? gotoNextPage : null}
              prevPage={prevPageUrl ? gotoPrevPage : null}
            />
          </Route>
          <Route path="/">
            <PokemonList pokemon={pokemon} setPokeUrl={setPokeUrl} />
          </Route>
        </div>
      )}
    </div>
  );
}

export default App;
