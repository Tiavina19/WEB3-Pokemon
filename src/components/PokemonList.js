import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../style/pokemon.module.css";

const PokemonList = ({ pokemonList, basePath }) => {
  const router = useRouter();

  const handleDetailsClick = (id) => {
    const basePathWithId = router.pathname.includes("/server")
      ? "/server"
      : "/client";
    router.push(`${basePathWithId}/[id]`, `${basePathWithId}/${id}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Liste des Pokémon</h2>
      <ul className={styles.pokemonList}>
        {pokemonList.map((pokemon, index) => (
          <li key={index} className={styles.pokemonListItem}>
            <div className={styles.pokemonInfo}>
              <span className={styles.pokemonId}>{index + 1}</span>
              <span className={styles.pokemonName}>{pokemon.name}</span>
            </div>
            <button
              className={styles.pokemonButton}
              onClick={() => handleDetailsClick(index + 1)}
            >
              Détails
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
