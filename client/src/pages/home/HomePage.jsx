import React from "react";
import { Box, Typography, CardMedia, Card, CardContent } from "@mui/material"
import { getHeadlines } from "../../services/articles.service";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import ArticleCard from "../../components/ArticleCard";

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