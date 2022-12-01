import { Box, Link } from '@mui/material'

export default function Footer() {
    return (
        <Box 
            sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: "row"},
            alignItems: 'center',
            justifyContent: 'center',
            gap: {xs: '8px', sm: '20px'} ,
            padding: '25px',
            marginTop: '40px',
            backgroundColor: 'lightGrey'
            }}
        >
            <Link href="blank" underline="hover">
                Employees
            </Link>
            <Link href="blank" underline="hover">
                Departments
            </Link>
            <Link href="blank" underline="hover">
                OrgChart
            </Link>
            <Link href="blank" underline="hover">
                Locations
            </Link>
            <Link href="blank" underline="hover">
                Teams
            </Link>
        </Box>
    )
}

