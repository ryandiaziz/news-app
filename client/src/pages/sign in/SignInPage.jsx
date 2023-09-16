import { Box } from "@mui/material"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <Box sx={{
            maxWidth: 'xl',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                bgcolor: 'white',
                height: 300,
                width: 350,
                borderRadius: 2,
                p: 3,
                boxShadow: 2,
                m: { xs: 2, md: 0 }
            }}>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'primary.dark',
                        textDecoration: 'none',
                    }}
                >
                    SIGN IN
                </Typography>
                <TextField id="outlined-search" size="small" label="Email" type="search" />
                <TextField
                    id="outlined-password-input"
                    size="small"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button variant="contained">Sign in</Button>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Typography sx={{ fontWeight: 'light' }}>No account?</Typography>
                    <Link to={'../register'}>
                        <Typography sx={{ cursor: 'pointer' }}> Create one!</Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default SignInPage