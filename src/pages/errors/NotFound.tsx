import { Typography } from '@mui/material';

/**
 * 404 page for routes that hit a dead end
 * @component
 */
export default function NotFound() {
    return (
        <>
            <Typography variant="h1">404</Typography>
            <Typography variant="h2">That route does not exist!</Typography>
        </>
    );
}
