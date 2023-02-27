import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

function PokeInformation({ pokeUrl }) {
  const [pokemonData, setPokemonData] = useState([]);

  //   const url = pokemon[pokeId].url;
  //   console.log(pokeId);
  //   console.log(pokeUrl);

  const information = useCallback(async () => {
    const response = await axios.get(pokeUrl);
    setPokemonData(response.data);
  }, [pokeUrl]);

  useEffect(() => {
    information();
  }, [information]);

  //   console.log(pokemonData);

  return (
    <div className="m-4 items-center justify-center rounded-3xl bg-blue-200 p-4">
      <h1 className="text-5xl font-bold italic text-rose-600">
        {pokemonData.name}
      </h1>
      <div className="text-3xl">
        <div>
          SPECIES:{' '}
          <span className="font-extrabold text-blue-600">
            {pokemonData.name}
          </span>
        </div>
        <div>
          BASE EXPERIENCE:{' '}
          <span className="font-extrabold text-blue-600">
            {pokemonData.base_experience}
          </span>
        </div>
        <div>
          HEIGHT:{' '}
          <span className="font-extrabold text-blue-600">
            {pokemonData.height}
          </span>
        </div>
        <div>
          WEIGHT:{' '}
          <span className="font-extrabold text-blue-600">
            {pokemonData.weight}
          </span>
        </div>
        <div>
          ID:{' '}
          <span className="font-extrabold text-blue-600">{pokemonData.id}</span>
        </div>
        <div>
          ORDER:{' '}
          <span className="font-extrabold text-blue-600">
            {pokemonData.order}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PokeInformation;
