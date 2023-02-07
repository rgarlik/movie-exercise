import React from 'react';

/**
 * Keeps track of the last search that occurred
 */
const LastSearchContext = React.createContext<LastSearch>({
    scrollPosition: 0,
    query: '',
    page: 0
});

interface LastSearch {
    scrollPosition: number;
    query: string;
    page: number;
}

export default LastSearchContext;
