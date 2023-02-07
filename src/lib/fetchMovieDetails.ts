import { UseQueryOptions } from 'react-query';

/**
 * Fetches movies details based on the provided IMDB ID
 * @param id the movie's IMDB ID
 */
async function fetchMovieDetails(id: string) {
    const url = `${import.meta.env.VITE_OMDB_API}?apikey=${
        import.meta.env.VITE_OMDB_KEY
    }&i=${id}&plot=full`;
    const res = await fetch(url);

    return res.json();
}

export default fetchMovieDetails;
