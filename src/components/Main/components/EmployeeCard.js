import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function EmployeeCard(props) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card 
                elevation={2} 
                onClick={props.handleClick}
            >
                <CardActionArea sx={{py: '20px'}}>
                    <img className='employee-image' src={props.img} alt='employee headshot' />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <Typography variant='h5'>{props.firstName}&nbsp;{props.lastName}</Typography>
                        <Typography variant='p'>{props.email}&nbsp;</Typography>
                        <Typography variant='p'>{props.phone}</Typography>
                        <Typography variant='p'>{props.addressStreetNumber}&nbsp;{props.addressStreetName}</Typography>
                        <Typography variant='p'>{props.addressCity},&nbsp;{props.addressState}&nbsp;{props.addressZip}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}