import { Box, CircularProgress } from '@mui/material';

/**
 * A circular loading animation that's centered
 * on the x axis
 */
export default function CenteredLoading() {
    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}
