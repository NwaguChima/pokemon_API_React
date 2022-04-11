import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import styles from "./ModalContent.module.scss";

const ModalContent = () => {
  const { currentPokemon } = useContext(GlobalContext)!;

  let current = currentPokemon && currentPokemon;
  return (
    <div className={styles.pokemon}>
      <h1 className={styles.pokemon__head}>{current.name}</h1>
      <div className={styles.pokemon__body}>
        <div className={styles.pokemon__body__image}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${current.id}.svg`}
            alt={current.name}
          />
        </div>
        <div className={styles.pokemon__body__details}>
          <div className={styles.pokemon__body__details__abilities}>
            <p>
              Species: <span>{current.species.name}</span>
            </p>
            <p>
              Weigth: <span>{current.weight} lbs</span>
            </p>
            <p>
              Heigth: <span>{current.height} cm</span>
            </p>
            <p>
              base_Experince: <span>{current.base_experience}</span>
            </p>
            <p>
              Types:{" "}
              {current.types.map((type: any) => (
                <span key={type.type.name}>{type.type.name}, </span>
              ))}
            </p>
            <p>
              Moves:{" "}
              {current.moves.map((move: any, i: number) => {
                if (i < 10) {
                  return <span key={move.move.name}>{move.move.name}, </span>;
                } else if (i === 10) {
                  return <span key={move.move.name}>{move.move.name}...</span>;
                }
                return null;
              })}
            </p>
          </div>
          <div className={styles.pokemon__body__details__stats}>
            <h3>Stats</h3>
            {current.stats.map((stat: any) => (
              <p key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}, {stat.effort}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
