/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"

const Category = ({ categories, setCurrentCategory }) => {

    const handleCategory = (category) => {
        setCurrentCategory(category)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap', mb: 3 }}>
            {
                categories.map((category, i) => (
                    <Box
                        key={i}
                        onClick={() => handleCategory(category)}
                        sx={{
                            px: { xs: 1, md: 2 },
                            py: 0.5,
                            borderRadius: 1,
                            boxShadow: 1,
                            width: 'min-content',
                            cursor: 'pointer',
                            border: 1,
                            borderColor: 'transparant',
                            '&:hover': {
                                border: 1,
                                borderColor: 'secondary.main'
                            }
                        }}>
                        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>
                            {category}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Category