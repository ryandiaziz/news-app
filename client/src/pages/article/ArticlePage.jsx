import { Typography, Box, CardMedia } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


const ArticlePage = () => {
    const location = useLocation()
    const { title } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        setArticle(location.state.article)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return (
        <Box sx={{ maxWidth: 'xl', mx: 5, mt: 12 }}>
            <CardMedia sx={{ height: 300, width: 1 / 2, borderRadius: 1, m: 2 }} image={article.urlToImage} title="Article Image" />
            <Typography variant='h5'>{article.title}</Typography>
            <Typography>{article.content}</Typography>
        </Box>
    )
}

export default ArticlePage