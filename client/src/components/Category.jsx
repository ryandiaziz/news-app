import { Box, Typography } from "@mui/material"

const Category = () => {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap', mb: 3 }}>
            {
                categories.map((category, i) => (
                    <Box key={i} sx={{
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