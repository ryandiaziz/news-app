import { Typography, Box, CardMedia, IconButton, Snackbar, Alert } from '@mui/material'
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
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(article.url)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
        setArticle(location.state.article)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return (
        <Box sx={{ maxWidth: 'xl', mx: { xs: 2, sm: 5 }, mt: 12, mb: 10 }}>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" color="info" sx={{ width: '100%' }}>
                    Copied link
                </Alert>
            </Snackbar>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: { xs: 18, sm: 24, md: 26 },
            }}>{article.title}</Typography>
            <Typography sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: 'light'
            }}>by {article.author}</Typography>
            <Typography sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: 'light'
            }}>Published {article.publishedAt}</Typography>
            <IconWrapper>
                <IconButton size='small' aria-label="like" >
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <InsertLinkRoundedIcon color='secondary.main' onClick={handleClick} />
                </IconButton>
                <IconButton aria-label="open-article" onClick={() => window.open(article.url, '_blank')}>
                    <OpenInNewRoundedIcon color='secondary.main' />
                </IconButton>
            </IconWrapper>
            <CardMedia sx={{
                height: { xs: 200, sm: 500, md: 700 },
                width: '100%',
                borderRadius: 2,
                my: 2
            }} image={article.urlToImage || 'https://placehold.co/600x400?text=Image'} title="Article Image" />
            <Typography sx={{
                fontWeight: 'normal',
                fontSize: { xs: 14, sm: 16, md: 18 },
            }}>{article.content || 'No contents'}</Typography>
        </Box>
    )
}

export default ArticlePage