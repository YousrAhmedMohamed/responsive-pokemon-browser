import { useQuery, useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchPokemonWithDetails } from '../api/pokemonApi';


export const usePokemonPagination = (page: number, limit: number = 20) => {
  const offset = (page - 1) * limit;

  return useQuery({
    queryKey: ['pokemon', 'pagination', page],
    queryFn: () => fetchPokemonWithDetails(limit, offset),
    placeholderData: keepPreviousData, 
})
}

export const usePokemonInfinite = (limit: number = 20) => {
  return useInfiniteQuery({
    queryKey: ['pokemon', 'infinite'],
    queryFn: ({ pageParam = 0 }) => fetchPokemonWithDetails(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      return parseInt(url.searchParams.get('offset') || '0');
    },
  });
};