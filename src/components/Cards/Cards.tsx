import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Spinner from "../Spinner/Spinner";
import styles from "./Cards.module.scss";

interface ICard {
  pokemon: any;
}

const Card: React.FC<ICard> = ({ pokemon }) => {
  const context = useContext(GlobalContext);

  const handleShowDetails = (item: any) => {
    context?.setLoading(true);
    context?.setCurrentPokemon(item);
    context?.setShowModal(true);
    context?.setLoading(false);
  };

  return (
    <>
      {context!.loading ? (
        <div className={styles.load}>
          <h1>Loading...</h1>
          <Spinner />
        </div>
      ) : (
        pokemon &&
        pokemon.map((item: any) => {
          return (
            <div key={item.id}>
              <div
                className={styles.card}
                onClick={() => handleShowDetails(item)}
              >
                <img src={item.sprites.front_default} alt={item.name} />
                <div className={styles.card__info}>
                  <h2>{item.id}</h2>
                  <h2>{item.name}</h2>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
