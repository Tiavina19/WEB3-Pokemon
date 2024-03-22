import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PokemonList from './../../components/PokemonList';

const ClientIndex = () => {
  const router = useRouter();
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error('Error fetching Pokemon:', error));
  }, []);

  return (
    <div>
      <h1 >Pokémon List (Client)</h1>
      <PokemonList pokemonList={pokemonList} router={router} />
    </div>
  );
};

export default ClientIndex;
