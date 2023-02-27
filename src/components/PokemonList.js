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
    <div className="justify-center p-4 text-center">{renderedPokemon}</div>
  );
}

export default PokemonList;
