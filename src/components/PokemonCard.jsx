const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h2>{pokemon?.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="height-weight">
        <span>Height : {pokemon.height * 10} cm</span>
        <span>Weight : {pokemon.weight / 10} kg</span>
      </div>
      <div className="species">
        <span>Species : {pokemon.species.name}</span>
      </div>
      <div className="types">
        <span>Types: {pokemon.types.map((ab) => `${ab.type.name},`)}</span>
      </div>
      <div className="abilities">
        <span>
          Abilities: {pokemon.abilities.map((ab) => `${ab.ability.name}, `)}
        </span>
      </div>
    </div>
  );
};

export default PokemonCard;
