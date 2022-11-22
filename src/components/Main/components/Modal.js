import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    p: 5,
};

export default function BasicModal(props) {
    return (
        <div>
            <Modal 
                open={props.open}
                onClose={props.onClose}
            >
                <Box sx={style}>
                    <Card>
                        <Container 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column',
                                alignItem: 'center',
                                margin: '10px'
                            }}
                        >
                            <Container 
                                sx={{
                                    display: 'flex', 
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <img 
                                    className='employee-image' 
                                    src={props.img} 
                                    alt='employee headshot' 
                                    sx={{mr:'auto'}}
                                />
                                <Button onClick={props.onClose}>X</Button>
                            </Container>
                            <CardContent>
                                <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                                    <Typography variant='h4'>{props.firstName}&nbsp;</Typography>
                                    <Typography variant='h4'>{props.lastName}</Typography>
                                </CardContent>
                                <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant='p'>{props.email}&nbsp;</Typography>
                                    <Typography variant='p'>{props.phone}</Typography>
                                </CardContent>
                            </CardContent>
                            <br />
                            <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                                <Button onClick={props.handlePrevClick}>
                                    Previous
                                </Button>
                                    <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                                        <Typography variant='p'>{props.addressStreetNumber}&nbsp;</Typography>
                                        <Typography variant='p'>{props.addressStreetName}</Typography>
                                        <br />
                                        <Typography variant='p'>{props.addressCity},&nbsp;</Typography>
                                        <Typography variant='p'>{props.addressState}&nbsp;</Typography>
                                        <Typography variant='p'>{props.addressPostcode}</Typography>
                                    </CardContent>
                                <Button onClick={props.handleNextClick}>
                                    Next
                                </Button>
                            </CardContent>
                        </Container>
                    </Card>    
                </Box>
            </Modal>
        </div>
    );
}