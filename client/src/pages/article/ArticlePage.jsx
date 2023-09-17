import { Typography, Box, CardMedia, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled';

const IconWrapper = styled(Box)(() => ({
    display: 'flex',
    gap: 2,
}))

const ArticlePage = () => {
    const location = useLocation()
    const { title } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        setArticle(location.state.article)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return (
        <Box sx={{ maxWidth: 'lg', mx: 'auto', mt: 12, border: 1 }}>
            <Typography variant='h4' fontWeight={'bold'} mb={2}>{article.title}</Typography>
            <Typography fontWeight={'light'}>by {article.author}</Typography>
            <Typography fontWeight={'light'}>Published {article.publishedAt}</Typography>
            <IconWrapper>
                <IconButton size='small' aria-label="like">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <InsertLinkRoundedIcon color='secondary.main' />
                </IconButton>
                <IconButton aria-label="open-article">
                    <OpenInNewRoundedIcon color='secondary.main' />
                </IconButton>
            </IconWrapper>
            <CardMedia sx={{ height: 700, width: '100%', borderRadius: 2, my: 2 }} image={article.urlToImage} title="Article Image" />
            <Typography>{article.content}</Typography>
        </Box>
    )
}

export default ArticlePage