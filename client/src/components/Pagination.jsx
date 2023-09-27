/* eslint-disable react/prop-types */
import { Box, Pagination } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { updatepagination } from "../redux/paginationSlice"

const PaginationUI = () => {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.pagination)
    const { articles } = useSelector(state => state.article)

    const handleChange = (e, p) => {
        dispatch(updatepagination({
            number: p,
            articles
        }))
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