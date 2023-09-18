/* eslint-disable react/prop-types */
import { Typography, Box, CardMedia, IconButton, Snackbar, Alert } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { addLikedArticle, removeLikedNews } from '../../services/like.service';

const IconWrapper = styled(Box)(() => ({
    display: 'flex',
    gap: 2,
}))

const ArticlePage = ({ loginStatus, }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isLike, setIsLike] = useState(false)
    const { title } = useParams()
    const [article, setArticle] = useState({})
    const [copyLink, setCopyLink] = useState(false);
    const [likeAlert, setLikeAlert] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(article.url)
        setCopyLink(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setCopyLink(false);
        setLikeAlert(false);
    };

    const handleLike = () => {
        if (!loginStatus) {
            navigate('/login')
            return
        }
        if (article.id) {
            removeLikedNews(article.id)
            navigate('/liked')
            return
        }
        article.source = article.source.name
        addLikedArticle(article, (response) => {
            console.log(response);
            if (response.status === 'ok') {
                setLikeAlert(true);
                setIsLike(true)
            }
        })
    }

    useEffect(() => {
        setArticle(location.state.article)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return (
        <Box sx={{ maxWidth: 'xl', mx: { xs: 2, sm: 5 }, mt: 12, mb: 10 }}>
            <Snackbar open={copyLink} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" color="info" sx={{ width: '100%' }}>
                    Copied link
                </Alert>
            </Snackbar>
            <Snackbar open={likeAlert} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" color="info" sx={{ width: '100%' }}>
                    Liked News
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
                <IconButton size='small' aria-label="like" onClick={handleLike} >
                    {
                        isLike ? <FavoriteIcon />
                            : <FavoriteBorderIcon />
                    }
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