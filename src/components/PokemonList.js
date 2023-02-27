function PokemonList({ pokemon }) {
  const renderedPokemon = pokemon.map((poke, index) => {
    return <div key={index}>{poke.name}</div>;
  });
  return <div>{renderedPokemon}</div>;
}

export default PokemonList;
