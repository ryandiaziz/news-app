/* eslint-disable react/prop-types */
import { Box, Pagination } from "@mui/material"

const PaginationUI = ({ totalPosts, postPerPage, setCurrentPage }) => {
    const count = Math.ceil(totalPosts / postPerPage)
    const handleChange = (e, p) => {
        setCurrentPage(p)
        console.log(count);
    }
    return (
        <Box
            sx={{
                py: 3,
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Pagination count={count} shape="rounded" onChange={handleChange} />
        </Box>
    )
}

export default PaginationUI