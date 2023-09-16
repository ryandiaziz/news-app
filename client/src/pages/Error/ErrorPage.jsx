import { Box, Typography } from "@mui/material"

const ErrorPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Typography variant="h3">Oops!</Typography>
            <Typography>Page not found</Typography>
        </Box>
    )
}

export default ErrorPage