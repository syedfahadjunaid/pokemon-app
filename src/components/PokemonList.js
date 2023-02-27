function PokemonList({ pokemon }) {
  const renderedPokemon = pokemon.map((poke, index) => {
    return (
      <div key={index}>
        <h1 className="text-center text-lg font-bold text-red-600">
          {poke.name.toUpperCase()}
        </h1>
      </div>
    );
  });
  return (
    <div className="justify-center border-b-2 border-l-2 border-r-2 border-solid border-rose-600 p-4 text-center">
      {renderedPokemon}
    </div>
  );
}

export default PokemonList;
