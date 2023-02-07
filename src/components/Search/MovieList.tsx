import { SearchBarProps } from './SearchBar';
import {
    Alert,
    Box,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import React from 'react';
import Movie from '../../model/Movie';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton';

/**
 * Displays a list of provided movies
 * @component
 */
export default function MovieList(props: MovieListProps) {
    if (props.error) {
        return <Alert severity="error">An error occured when loading movie data.</Alert>;
    }

    if (props.loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (props.movies.length === 0) {
        return <Alert severity="info">No movies found.</Alert>;
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Poster</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.movies.map((movie) => (
                        <TableRow
                            key={movie.imdbID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                <FavoriteButton movie={movie} />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={'../movie/' + movie.imdbID}>{movie.Title}</Link>
                            </TableCell>
                            <TableCell align="right">{movie.Year}</TableCell>
                            <TableCell align="right">
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title + ' poster'}
                                    height={100}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export interface MovieListProps {
    /**
     * List of movies to display
     */
    movies: Movie[];

    /**
     * Is the data being loaded
     */
    loading: boolean;

    /**
     * Was there an error fetching the data
     */
    error: boolean;
}
