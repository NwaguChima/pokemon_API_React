import axios from "axios";
import { IPokemon } from "../Utils/pokemonInterface";

export async function getPokemon(url: string) {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error: any) {
    return error.message;
  }
}

export const getPokemonDetails = async (array: [IPokemon]) => {
  try {
    const response = array.map(async (item: IPokemon) => {
      return await (
        await axios.get(item.url)
      ).data;
    });

    const data = await Promise.all(response);

    return data;
  } catch (error: any) {
    return error.message;
  }
};
