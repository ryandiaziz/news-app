import React from "react";
import { Box, Typography, CardMedia, Card, CardContent } from "@mui/material"
import { getHeadlines } from "../../services/articles.service";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

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