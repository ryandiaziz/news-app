/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Snackbar, Alert } from "@mui/material"
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { login, closealert } from "../../redux/authSlice";

const ProfilePage = () => {
    const dispatch = useDispatch()
    const { loading, error, user } = useSelector((state => state.auth))
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = () => {
        dispatch(login(form))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closealert())
    };

    return (
        <Box sx={{
            maxWidth: 'xl',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Snackbar open={error.status} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {error.message}
                </Alert>
            </Snackbar>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                bgcolor: 'white',
                height: 250,
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
                    PROFILE
                </Typography>
                <TextField
                    id="outlined-search"
                    size="small"
                    label="Name"
                    type="email"
                    value={user.name}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <TextField
                    id="outlined-search"
                    size="small"
                    label="Email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Button variant="contained">{loading.login ? 'Loading' : 'Save'}</Button>
            </Box>
        </Box>
    )
}

export default ProfilePage