import styles from "../style/pokemon.module.css";

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Détails du Pokémon</h2>
      <div className={styles.details}>
        <div className={styles.detail}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className={styles.image}
          />
        </div>
        <div className={styles.detail}>
          <p className={styles.info}>
            <span className={styles.label}>Nom:</span> {pokemon.name}
          </p>
          <p className={styles.info}>
            <span className={styles.label}>Taille:</span> {pokemon.height}
          </p>
          <p className={styles.info}>
            <span className={styles.label}>Poids:</span> {pokemon.weight}
          </p>
          <p className={styles.info}>
            <span className={styles.label}>Types:</span>{" "}
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
          <p className={styles.info}>
            <span className={styles.label}>Numéro:</span> {pokemon.order}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
