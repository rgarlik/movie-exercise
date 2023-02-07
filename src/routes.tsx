import { createBrowserRouter, Navigate } from 'react-router-dom';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import React from 'react';
import Detail from './pages/Detail';
import NotFound from './pages/errors/NotFound';
import AppLayout from './layouts/AppLayout';

const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/',
                element: <Navigate to="/search" replace />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/movie/:id',
                element: <Detail />
            },
            {
                path: '/favorites',
                element: <Favorites />
            }
        ]
    }
]);

export default routes;
