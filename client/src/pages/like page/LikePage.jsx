import { useState, useEffect } from "react"
import { getLikedNews } from "../../services/like.service"
import { Box, Typography } from "@mui/material"
import ArticleCard from "../../components/ArticleCard"
import Loader from "../../components/Loader"

const LikePage = () => {
    const [articles, setArticles] = useState([])
    const [likeState, setLikeState] = useState('initial')

    useEffect(() => {
        getLikedNews(setLikeState, (result) => {
            setArticles(result.articles)
        })
    }, [])

    return (
        <Box sx={{ maxWidth: 'xl', mx: { xs: 2, sm: 5 }, mt: 12 }}>
            <Box>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: 20, sm: 24, md: 26 },
                    }}
                >
                    Liked News
                </Typography>
                {
                    likeState === 'loading' ?
                        <Loader />
                        : articles.length === 0 ?
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
                            : <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {
                                    articles.map((article, i) => (
                                        <ArticleCard key={i} article={article} />
                                    ))
                                }
                            </Box>
                }
            </Box>
        </Box>
    )
}

export default LikePage