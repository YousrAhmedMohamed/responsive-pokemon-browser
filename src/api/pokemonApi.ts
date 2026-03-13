import axios from 'axios';
import { type PokemonListResponse, type PokemonDetail } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

const pokemonClient = axios.create({
  baseURL: BASE_URL,
});

export const fetchPokemonList = async (limit: number, offset: number): Promise<PokemonListResponse> => {
 
  const response = await pokemonClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const fetchPokemonDetails = async (idOrName: string | number): Promise<PokemonDetail> => {

  const response = await pokemonClient.get(`/pokemon/${idOrName}`);
  return response.data;
};

export const fetchPokemonWithDetails = async (limit: number, offset: number) => {
  const listData = await fetchPokemonList(limit, offset);
  
  const detailedData = await Promise.all(
    listData.results.map((pokemon) => fetchPokemonDetails(pokemon.name))
  );

  return {
    ...listData,
    results: detailedData 
  };
};