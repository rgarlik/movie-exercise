import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from './lib/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import FavoritesContext, { defaultFavoritesValue } from './lib/FavoritesContext';
import LastSearchContext from './lib/LastSearchContext';

function App() {
    return (
        <div className="App">
            <LastSearchContext.Provider value={{ scrollPosition: 0, query: '' }}>
                <FavoritesContext.Provider value={defaultFavoritesValue()}>
                    <QueryClientProvider client={queryClient}>
                        <RouterProvider router={routes} />
                        <ReactQueryDevtools />
                    </QueryClientProvider>
                </FavoritesContext.Provider>
            </LastSearchContext.Provider>
        </div>
    );
}

export default App;
