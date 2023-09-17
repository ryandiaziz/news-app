import React from "react";
import { Box, Typography, InputBase } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import { getHeadlines } from "../../services/articles.service";
import Loader from "../../components/Loader";
import Category from "../../components/Category";
import ArticleCard from "../../components/ArticleCard"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const HomePage = () => {
    const [articles, setArticles] = React.useState([])

    React.useEffect(() => {
        getHeadlines((result) => {
            setArticles(result.articles.slice(0, 15))
        })
    }, [])
    return (
        <>
            <Box sx={{ maxWidth: 'xl', mx: { xs: 2, sm: 5 }, mt: 12 }}>
                <Box sx={{
                    pb: 5,
                    width: { xs: '80%', sm: '60%', md: '40%' },
                    mx: 'auto',
                }}>
                    <Typography variant="h5" fontWeight={'light'} textAlign={'center'} mb={2}>Search News</Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
                <Category />
                {
                    articles.length != 0
                        ? <>
                            <Typography variant="h4" fontWeight={'bold'}>
                                Latest News
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {
                                    articles.map((article, i) => (
                                        <ArticleCard key={i} article={article} />
                                    ))
                                }
                            </Box>
                        </>
                        : <Loader />
                }
            </Box>
        </>
    )
}

export default HomePage