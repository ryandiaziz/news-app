import React from "react";
import { Box, Typography, CardMedia, Card, CardContent, InputBase } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { getHeadlines } from "../../services/articles.service";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import Category from "../../components/Category";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
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
        // vertical padding + font size from searchIcon
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
    const navigate = useNavigate()

    React.useEffect(() => {
        getHeadlines((result) => {
            setArticles(result.articles.slice(0, 15))
        })
    }, [])
    return (
        <>
            <Box sx={{ maxWidth: 'xl', mx: 5, mt: 12 }}>
                <Box sx={{
                    py: 10,
                    width: '50%',
                    m: 'auto'
                }}>
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
                                        <Card key={i} sx={{ boxShadow: 2 }}>
                                            <Box sx={{ display: 'flex', }} >
                                                <CardMedia
                                                    sx={{ height: 300, width: 1 / 2, borderRadius: 1, m: 2 }}
                                                    image={article.urlToImage || 'https://placehold.co/600x400?text=Image'}
                                                    title="Article Image"
                                                />
                                                <CardContent sx={{ width: 1 / 2, m: 2, p: 0 }}>
                                                    <Typography
                                                        onClick={() => navigate(`/article/${article.source.name}`, { state: { article } })}
                                                        sx={{ textDecoration: 'none', cursor: 'pointer' }}
                                                        variant="h5"
                                                    >{article.title}</Typography>
                                                    <Typography variant="subtitle2">{article.author || 'author'} - {article.publishedAt}</Typography>
                                                    <Typography variant="caption">{article.content}</Typography>
                                                </CardContent>
                                            </Box>
                                        </Card>
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