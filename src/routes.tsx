import { createBrowserRouter, Navigate } from 'react-router-dom';
import React from 'react';
import AppLayout from './layouts/AppLayout';
import CenteredLoading from './components/CenteredLoading';

const NotFound = React.lazy(() => import('./pages/errors/NotFound'));
const Search = React.lazy(() => import('./pages/Search'));
const Detail = React.lazy(() => import('./pages/Favorites'));
const Favorites = React.lazy(() => import('./pages/Favorites'));

const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '*',
                element: (
                    <React.Suspense fallback={<CenteredLoading />}>
                        <NotFound />
                    </React.Suspense>
                )
            },
            {
                path: '/',
                element: <Navigate to="/search" replace />
            },
            {
                path: '/search',
                element: (
                    <React.Suspense fallback={<CenteredLoading />}>
                        <Search />
                    </React.Suspense>
                )
            },
            {
                path: '/movie/:id',
                element: (
                    <React.Suspense fallback={<CenteredLoading />}>
                        <Detail />
                    </React.Suspense>
                )
            },
            {
                path: '/favorites',
                element: (
                    <React.Suspense fallback={<CenteredLoading />}>
                        <Favorites />
                    </React.Suspense>
                )
            }
        ]
    }
]);

export default routes;
