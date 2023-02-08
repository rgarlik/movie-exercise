import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useContext, useState } from 'react';
import { IconButton } from '@mui/material';
import Movie from '../model/Movie';
import FavoritesContext from '../lib/FavoritesContext';

export default function FavoriteButton(props: FavoriteButtonProps) {
    // Favorite list context
    const favorites = useContext(FavoritesContext);

    // State that describes if this movie has been favorited already
    const [checked, setChecked] = useState(() => {
        // Check if favorite list includes this movie
        return !!favorites.find((movie) => movie.imdbID == props.movie.imdbID);
    });

    // Button click handler
    const clickHandler = () => {
        const thisMovie = favorites.find((movie) => movie.imdbID == props.movie.imdbID);
        if (thisMovie) {
            favorites.splice(favorites.indexOf(thisMovie), 1);
            setChecked(false);
        } else {
            favorites.push(props.movie);
            setChecked(true);
        }

        // Save the favorites array
        window.localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <IconButton onClick={clickHandler}>
            {checked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    );
}

export interface FavoriteButtonProps {
    /**
     * Id of the movie this favorite button controls
     */
    movie: Movie;
}
