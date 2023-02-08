import Movie from '../model/Movie';
import React from 'react';

/**
 * Get the default value for the FavoritesContext by loading it from
 * local storage
 */
export const defaultFavoritesValue = (): Movie[] => {
    // load the favorites array from localStorage
    let favoritesArray: Movie[];
    // Check if local storage even exists
    // Get the local storage favorites array
    if (window.localStorage.getItem('favorites')) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        favoritesArray = JSON.parse(window.localStorage.getItem('favorites'));
    } else {
        window.localStorage.setItem('favorites', '[]');
        favoritesArray = [];
    }
    return favoritesArray;
};

/**
 * A context that contains a list of the current favorite movies
 */
const FavoritesContext = React.createContext(defaultFavoritesValue());

export default FavoritesContext;
