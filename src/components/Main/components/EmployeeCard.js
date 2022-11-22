import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function EmployeeCard(props) {
    return (
        <Grid item xs={3}>
            <Card 
                elevation={2} 
                onClick={props.handleClick}
                sx={{display: 'flex', flexDirection: 'row'}}
            >
                <CardActionArea>
                    <img className='employee-image' src={props.img} alt='employee headshot' />
                    <CardContent>
                        <Typography variant='h4'>{props.firstName}</Typography>
                        <Typography variant='h4'>{props.lastName}</Typography>
                        <Typography variant='p'>{props.email}&nbsp;</Typography>
                        <Typography variant='p'>{props.phone}</Typography>
                        <br />
                        <Typography variant='p'>{props.addressStreetNumber}&nbsp;</Typography>
                        <Typography variant='p'>{props.addressStreetName}</Typography>
                        <br />
                        <Typography variant='p'>{props.addressCity},&nbsp;</Typography>
                        <Typography variant='p'>{props.addressState}&nbsp;</Typography>
                        <Typography variant='p'>{props.addressZip}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}