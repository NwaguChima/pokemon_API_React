import React, { useContext, useEffect, useMemo, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { getPokemon, getPokemonDetails } from "../../Data/getPokeman";
import Card from "../Cards/Cards";
import GlobalContext from "../../context/GlobalContext";
import styles from "./Container.module.scss";

const Container = () => {
  const [pokemonData, setPokmonData] = useState<any>();
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=16"
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [page, setPage] = useState(1);
  const { setLoading, searchTerm, error, setError } =
    useContext(GlobalContext)!;
  let term = searchTerm.length >= 3 ? searchTerm : "";

  useEffect(() => {
    setLoading(true);

    async function laodPokemon() {
      try {
        let data;
        if (term) {
          data = await getPokemon(
            "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000"
          );
        } else {
          data = await getPokemon(url);
        }
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        const pokemonDetails = await getPokemonDetails(data.results);
        setPokmonData(pokemonDetails);
      } catch (error) {
        setError(error);
      }
    }

    laodPokemon();
    setLoading(false);
  }, [url, searchTerm]);

  const handleChangeUrl = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: string
  ) => {
    e.preventDefault();

    if (action === "prev" && prevUrl) {
      setUrl(prevUrl!);
      setPage(page - 1);
    } else if (action === "next" && nextUrl) {
      setUrl(nextUrl!);
      setPage(page + 1);
    }
    scroll.scrollToTop();
  };

  let filteredSearch =
    pokemonData &&
    pokemonData.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(term.toLocaleLowerCase())
    );

  if (error) return <div>{error}</div>;
  return (
    <main className={styles.container}>
      <div className={styles.container__box}>
        <Card pokemon={filteredSearch} />
        <div className={styles.container__page}>
          <button
            onClick={(event) => handleChangeUrl(event, "prev")}
            className={styles.container__page__prev}
            disabled={!prevUrl ? true : false}
          >
            <i>
              <IoArrowBack />
            </i>
            <span>Prev</span>
          </button>
          <p data-testid="page">{page}</p>
          <button
            onClick={(event) => handleChangeUrl(event, "next")}
            className={styles.container__page__next}
            disabled={!nextUrl ? true : false}
          >
            <span>Next</span>
            <i>
              <IoArrowForward />
            </i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Container;
