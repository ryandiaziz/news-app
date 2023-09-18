/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Box, Typography, InputBase } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import { getArticles, searchArticles } from "../../services/articles.service";
import Loader from "../../components/Loader";
import Category from "../../components/Category";
import ArticleCard from "../../components/ArticleCard"
import PaginationUI from "../../components/Pagination";

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

const NasionalPage = () => {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']
    const [articleState, setArticleState] = useState('initial')
    const [search, setSearch] = useState('')
    const [articles, setArticles] = useState([])
    const [currentCategory, setCurrentCategory] = useState('general')
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 15

    const lastPostIndex = currentPage * postPerPage;
    const firstPostPostIndex = lastPostIndex - postPerPage;
    const currentPosts = articles.slice(firstPostPostIndex, lastPostIndex);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        // console.log(event.target.value);
    };

    useEffect(() => {
        getArticles(setArticleState, 'id', currentCategory, (result) => {
            setArticles(result.articles)
        })
    }, [currentCategory])

    useEffect(() => {
        const timeout = setTimeout(() => {
            searchArticles(setArticleState, 'id', currentCategory, search, (result) => {
                setArticles(result.articles)
            })
        }, 500)

        return () => {
            clearTimeout(timeout)
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
                    articleState === 'loading'
                        ?
                        <Loader />
                        :
                        articleState === 'error'
                            ?
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh'
                            }}>
                                <Typography variant="h3">Oops!</Typography>
                                <Typography>Something went wrong</Typography>
                            </Box>
                            :
                            currentPosts.length === 0
                                ?
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100vh'
                                }}>
                                    <Typography variant="h3">Oops!</Typography>
                                    <Typography>No articles found</Typography>
                                </Box>
                                :
                                <Box>
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
                                            currentPosts.map((article, i) => (
                                                <ArticleCard key={i} article={article} />
                                            ))
                                        }
                                    </Box>
                                </Box>
                }
                <PaginationUI
                    totalPosts={articles.length}
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </Box>
        </>
    )
}

export default NasionalPage