import { IconButton, InputBase, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

/**
 * Movie search bar with a text input and a button
 * Fires an event on button click and checks if the searched query is not empty
 * @component
 */
export default function SearchBar(props: SearchBarProps) {
    // Search text state
    const [searchText, setSearchText] = useState('');

    // Should the input be painted red
    const [isError, setIsError] = useState(false);

    // Internal submit handler that fires the outer event
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchText == '') {
            // The user can click the button after initial page load
            setIsError(true);
        } else {
            // Fire outbound event
            props.onSearch(searchText);
        }
    };

    // Called when the input value is changed
    const onInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchText(event.target.value);
        // Color the input red if value is empty
        if (event.target.value == '') {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginBottom: '2rem'
            }}>
            <TextField
                sx={{ ml: 1, flex: 1 }}
                placeholder="Movie title"
                variant="standard"
                error={isError}
                onChange={onInputChange}
            />
            <IconButton disabled={isError} type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export interface SearchBarProps {
    /**
     * Fires whenever the search button is clicked with a non-empty
     * search query
     * @param query is the searched text
     */
    onSearch: (query: string) => void;
}
