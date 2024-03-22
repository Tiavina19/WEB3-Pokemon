import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PokemonDetails from './../../components/PokemonDetails';
import styles from '../../style/pokemon.module.css'

const PokemonDetailsPage = ({ pokemonData }) => {
  return (
    <div>
      <h1 className={styles.title}>Pokémon Details</h1>
      {pokemonData && <PokemonDetails pokemon={pokemonData} />}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemonData = await res.json();

  return {
    props: {
      pokemonData
    }
  };
}

export default PokemonDetailsPage;
