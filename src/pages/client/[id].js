import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PokemonDetails from './../../components/PokemonDetails';
import styles from '../../style/pokemon.module.css';

const ClientPokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error('Error fetching Pokemon details:', error));
    }
  }, [id]);

  return (
    <div>
      <h1 className={styles.title}>Pokémon Details (Client)</h1>
      {pokemonData && <PokemonDetails pokemon={pokemonData} />}
    </div>
  );
};

export default ClientPokemonDetails;
