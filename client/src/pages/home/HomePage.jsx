import React from "react";
import { Box, Typography } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getHeadlines } from "../../axios/articles";
import styled from "@emotion/styled";

const HomePage = () => {
    const [articles, setArticles] = React.useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const ImageSlider = styled(Box)(({
        backgroundColor: 'green',
        display: "inline",
        flexDirection: 'row'
    }));

    React.useEffect(() => {
        getHeadlines((result) => {
            setArticles(result.articles.slice(0, 10))
        })
    }, [])
    return (
        <>
            <Box sx={{ maxWidth: 'xl', mx: 5, mt: 12 }}>
                <Typography variant="h4" fontWeight={'bold'}>
                    Headlines
                </Typography>
                <Slider {...settings}>
                    {
                        articles.map((article, i) => (
                            <ImageSlider key={i}>
                                <img src={article.urlToImage} alt="Headlines" height={400} />
                                <Box>
                                    <Typography>{article.title}</Typography>
                                    <Typography variant="caption">{article.content}</Typography>
                                </Box>
                            </ImageSlider>
                        ))
                    }
                </Slider>
            </Box>
        </>
    )
}

export default HomePage