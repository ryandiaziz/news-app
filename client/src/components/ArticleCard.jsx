/* eslint-disable react/prop-types */
import { Card, Box, CardMedia, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ArticleCard = ({ article }) => {
    const navigate = useNavigate()
    return (
        <Card sx={{ boxShadow: 2 }}>
            <Box sx={{ display: 'flex', p: { xs: 1, sm: 2 } }} >
                <CardMedia
                    sx={{
                        height: { xs: 100, sm: 200, md: 300 },
                        width: { xs: '30%', sm: '40%', md: '50%' },
                        mr: { xs: 1, sm: 2 },
                        borderRadius: 1
                    }}
                    image={article.urlToImage || 'https://placehold.co/600x400?text=Image'}
                    title="Article Image"
                />
                <CardContent
                    sx={{
                        width: { xs: '70%', sm: '60%', md: '50%' },
                        p: 0
                    }}
                >
                    <Typography
                        onClick={() => navigate(`/article/${article.source.name}`, { state: { article } })}
                        sx={{ textDecoration: 'none', cursor: 'pointer', fontSize: { xs: 14, sm: 16, md: 18 } }}
                    >{article.title}</Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: 10, sm: 12, md: 14 },
                            fontWeight: 'light'
                        }}
                    >{article.author || 'author'} - {article.publishedAt}</Typography>
                    <Typography sx={{ fontSize: { sm: 12, md: 14 }, fontWeight: 'light', display: { xs: 'none', sm: 'block' } }}>{article.content}</Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default ArticleCard