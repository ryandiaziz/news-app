/* eslint-disable react/prop-types */
import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleCard = ({ article }) => {
    const navigate = useNavigate()
    return (
        <Card sx={{ boxShadow: 2 }}>
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
    )
}

export default ArticleCard