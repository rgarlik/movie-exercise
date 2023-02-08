import { useParams } from 'react-router-dom';
import {
    Alert,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import fetchMovieDetails from '../lib/fetchMovieDetails';
import MovieDetail from '../model/MovieDetail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagIcon from '@mui/icons-material/Flag';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { css } from '@emotion/css';
import FavoriteButton from '../components/FavoriteButton';
import CenteredLoading from '../components/CenteredLoading';

/**
 * A details page for a specific movie
 * @component
 */
export default function Detail() {
    // get the id from the route url
    const { id } = useParams();

    if (!id) return <Alert severity="error">Please enter a movie Id</Alert>;

    // RQ query for looking up movie detail
    const { data, status } = useQuery({
        queryKey: ['movie-detail', id],
        queryFn: () => fetchMovieDetails(id ?? '')
    });

    if (status === 'error') {
        return <Alert severity="error">Error getting movie details</Alert>;
    }

    if (status === 'loading') {
        return <CenteredLoading />;
    }

    const movie = data as MovieDetail;

    return (
        <div
            className={css`
                position: relative;
            `}>
            <Typography variant="h1">{movie.Title}</Typography>
            <Typography variant="h3">{movie.Year}</Typography>
            <img
                src={movie.Poster}
                height={500}
                alt={movie.Title + ' poster'}
                className={css`
                    position: absolute;
                    z-index: -1;
                    right: 0;
                    height: 15rem;
                    top: 7rem;
                `}
            />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CalendarMonthIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Released" secondary={movie.Released} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FlagIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Language" secondary={movie.Language} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <TheaterComedyIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Genre" secondary={movie.Genre} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FavoriteButton movie={movie} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Favorite" secondary="Click the heart to favorite" />
                </ListItem>
            </List>
            <p>{movie.Plot}</p>
        </div>
    );
}
