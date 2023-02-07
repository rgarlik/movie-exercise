import MovieList from '../components/Search/MovieList';
import React, { useContext } from 'react';
import FavoritesContext from '../lib/FavoritesContext';

/**
 * A list of the user's favorite movies
 * @component
 */
export default function Favorites() {
    const favorites = useContext(FavoritesContext);
    return <MovieList error={false} loading={false} movies={favorites} />;
}
