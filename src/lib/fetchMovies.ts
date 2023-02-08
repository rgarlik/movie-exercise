/**
 * Fetches movies based on a provided query string
 */
async function fetchMovies({ queryKey = ['', ''], pageParam = 1 }) {
    const query = queryKey[1];
    const url = `${import.meta.env.VITE_OMDB_API}?apikey=${
        import.meta.env.VITE_OMDB_KEY
    }&s=${query}&page=${pageParam}`;
    const res = await fetch(url);

    return res.json();
}

export default fetchMovies;
