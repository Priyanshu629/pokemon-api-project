

export const fetchPokemon=async()=>{
 

    try {
       
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
        const data = await response.json()

        const pokedata = await Promise.all(data.results.map(async (p) => {
            const response = await fetch(p.url);
            const pokemonData = await response.json();
            return pokemonData;
        }));
       
      return pokedata
        
    } catch (error) {
        return error
    }
}