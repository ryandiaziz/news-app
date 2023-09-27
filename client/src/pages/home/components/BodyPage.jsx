/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { Box, Typography, InputBase } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../../components/Loader";
import Category from "../../../components/Category";
import ArticleCard from "../../../components/ArticleCard"
import PaginationUI from "../../../components/Pagination";
import { fetchArticles, searchArticles } from '../../../redux/articleSlice';

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

const BodyPage = ({ country }) => {
    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.article)
    const { post } = useSelector(state => state.pagination)
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']
    const [search, setSearch] = useState('')
    const [currentCategory, setCurrentCategory] = useState('general')

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        dispatch(fetchArticles({
            country,
            category: currentCategory
        }))

    }, [currentCategory])

    useEffect(() => {
        if (search) {
            const timeout = setTimeout(() => {
                console.log("DIJALANKAN");
                dispatch(searchArticles({
                    country: 'us',
                    category: currentCategory,
                    q: search
                }))

            }, 500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [search]);
    return (
        <>
            <Box sx={{ maxWidth: 'xl', mx: { xs: 2, sm: 5 }, mt: 12 }}>
                <Box sx={{
                    pb: 5,
                    width: { xs: '80%', sm: '60%', md: '40%' },
                    mx: 'auto',
                }}>
                    <Typography sx={{
                        fontWeight: 'light',
                        fontSize: { xs: 20, sm: 24, md: 26 },
                    }} textAlign={'center'} mb={2}>Search News</Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search', onChange: handleSearch }}
                        />
                    </Search>
                </Box>
                <Category
                    categories={categories}
                    setCurrentCategory={setCurrentCategory}
                />
                {
                    loading
                        ? <Loader />
                        : error
                            ? <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh'
                            }}>
                                <Typography variant="h3">Oops!</Typography>
                                <Typography>Something went wrong</Typography>
                            </Box>
                            : post.length
                                ? <Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: { xs: 20, sm: 24, md: 26 },
                                        }}
                                    >
                                        Latest News
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        {
                                            post.map((article, i) => (
                                                <ArticleCard key={i} article={article} />
                                            ))
                                        }
                                    </Box>
                                </Box>
                                : <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100vh'
                                }}>
                                    <Typography variant="h3">Oops!</Typography>
                                    <Typography>No articles found</Typography>
                                </Box>
                }
                <PaginationUI />
            </Box>
        </>
    )
}

export default BodyPage