import Link from './Link';

function PokemonList({ pokemon, setPokeUrl }) {
  const handleClick = (index) => {
    setPokeUrl(pokemon[index].url);
    // console.log(index);
  };
  const renderedPokemons = pokemon.map((poke, index) => {
    return (
      <div onClick={() => handleClick(index)} key={index}>
        <Link to="/pokeinformation">{poke.name.toUpperCase()}</Link>
      </div>
    );
  });

  return (
    <div className="justify-center p-4 text-center">{renderedPokemons}</div>
  );
}

export default PokemonList;
