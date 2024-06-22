import PokemonCard from "../components/PokemonCard";
import { useSearch } from "../context/searchContext";
import { fetchPokemon } from "../utils/fetchPokemon";
import { useQuery } from "@tanstack/react-query";

const Body = () => {
  const { searchText } = useSearch();
  const { data, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemon,
  });
  const filteredData = data?.filter((pokemons) =>
    pokemons.name?.toLowerCase().includes(searchText?.toLowerCase())
  );

  return (
    <div className="pokemon-card-container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : filteredData.length === 0 ? (
        <h2>No Pokemon Found..</h2>
      ) : (
        filteredData?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

export default Body;
