/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../redux/authSlice';

const pages = ['Internasional', 'Nasional'];
const settings = ['Liked News', 'Logout'];

function ResponsiveAppBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLogin } = useSelector((state) => state.auth)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        if (page === 'Internasional') {
            navigate('/')
        } else {
            navigate('/nasional')
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickUserMenu = (menu) => {
        switch (menu) {
            case 'Logout':
                dispatch(logout())
                break;
            case 'Liked News':
                navigate('/liked')
                break;
            default:
        }
        setAnchorElUser(null);
    }

    React.useEffect(() => {
        if (!isLogin) {
            navigate('/')
        }
    }, [isLogin])

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
            <Box sx={{ maxWidth: 'xl', mx: { xs: 1, sm: 5 } }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src="/icon/news_color.png" alt="news icon" width={40} />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'primary.dark',
                            textDecoration: 'none',
                        }}
                    >
                        YONEWS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary.dark"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)} sx={{ color: 'primary.main' }}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        YONEWS
                    </Typography>
                    {/* menu item */}
                    <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'primary.main', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ ml: { xs: 0, sm: 5 } }}>
                        {
                            isLogin
                                ? <Tooltip title="Open menu">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <AccountCircleRoundedIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                </Tooltip>
                                : <Link to={'login'}>
                                    <Button variant="outlined" sx={{
                                        '&:hover': {
                                            borderColor: 'secondary.main',
                                        }
                                    }}>
                                        <Typography variant='button'>Sign in</Typography>
                                    </Button>
                                </Link>
                        }
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleClickUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}
export default ResponsiveAppBar;
