import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/Search/SearchBar';
import MovieList from '../components/Search/MovieList';
import { useInfiniteQuery } from 'react-query';
import fetchMovies from '../lib/fetchMovies';
import LastSearchContext from '../lib/LastSearchContext';
import Movie from '../model/Movie';
import { Box, Button } from '@mui/material';

/**
 * A page with a search bar and a list of results for that particular search query
 * @component
 */
export default function Search() {
    // Last search context for historical purposes
    const lastSearchContext = useContext(LastSearchContext);

    // Scroll handler
    const handleScroll = () => {
        // Remember scroll position for history reasons
        lastSearchContext.scrollPosition = window.scrollY;
    };

    // On mount
    useEffect(() => {
        // Scroll to latest position
        window.scrollTo(0, lastSearchContext.scrollPosition);

        // Set search query from history
        setSearchQuery(lastSearchContext.query);

        // Add scroll handler
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Remove scroll handler on unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // The currently searched query
    const [searchQuery, setSearchQuery] = useState('');

    // Pagination page
    const [page, setPage] = useState(1);

    // Total movie list
    const [totalMovies, setTotalMovies] = useState<Movie[]>([]);

    // RQ query for looking up movies in an infinite scroll fashion
    const { data, status, fetchNextPage } = useInfiniteQuery({
        queryKey: ['movies-' + searchQuery, searchQuery],
        queryFn: fetchMovies,
        // Disable run onMount
        enabled: searchQuery != ''
    });

    // When data is updated, package all pages into one list
    useEffect(() => {
        const tempMovies: Movie[] = [];
        data?.pages.map((sublist) => tempMovies.push(...sublist.Search));
        setTotalMovies(tempMovies);
    }, [data]);

    const loadMore = async () => {
        setPage(page + 1);
        lastSearchContext.page = page + 1;
        await fetchNextPage({ pageParam: page + 1 });
    };

    return (
        <div>
            <SearchBar
                onSearch={(query) => {
                    lastSearchContext.query = query;
                    setSearchQuery(query);
                }}
            />
            <MovieList
                error={status === 'error'}
                loading={status === 'loading'}
                movies={status === 'success' ? totalMovies : []}
            />
            {status === 'success' && totalMovies.length > 0 && (
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        paddingTop: '2rem',
                        paddingBottom: '3rem'
                    }}>
                    <Button onClick={loadMore} variant="contained">
                        Load more
                    </Button>
                </Box>
            )}
        </div>
    );
}
