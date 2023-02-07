import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * The layout of any routed page. Contains a header and the page content.
 */
export default function AppLayout() {
    return (
        <>
            <Navbar />
            <Container maxWidth="md">
                <Outlet />
            </Container>
        </>
    );
}
