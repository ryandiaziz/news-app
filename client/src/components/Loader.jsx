import { Box } from '@mui/material'
import { ThreeBody } from '@uiball/loaders'


const Loader = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            bgcolor: 'transparent'
        }}>
            <ThreeBody
                size={40}
                speed={1.1}
                color="#699EFA"
            />
        </Box >
    )
}

export default Loader