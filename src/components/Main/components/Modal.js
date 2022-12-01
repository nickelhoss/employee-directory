import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    p: 5,
};

const mainContainerStyle = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    marginY: '30px'
}

const buttonStyle = {
    width: '75px'
}

const cardContentStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    gap: '8px'
}

export default function BasicModal(props) {
    return (
        <div>
            <Modal 
                open={props.open}
                onClose={props.onClose}
                sx={{outline: '0'}}
            >
                <Box sx={style}>
                    <Card>
                        <Container sx={mainContainerStyle}>
                            <Container 
                                sx={{
                                    display: 'flex', 
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box sx={{flex: '1'}}></Box>
                                <img 
                                    className='employee-image' 
                                    src={props.img} 
                                    alt='employee headshot'
                                />
                                <Button onClick={props.onClose} sx={{alignSelf: 'start', flex: '1'}}>X</Button>
                            </Container>
                            <CardContent sx={cardContentStyle}>
                                <Typography variant='h6'>{props.firstName}&nbsp;{props.lastName}</Typography>
                                <Typography variant='p'>{props.email}</Typography>
                                <Typography variant='p'>{props.phone}</Typography>
                                <Divider sx={{width:'100%', my: '5px'}}/>
                                <Typography variant='p'>{props.addressStreetNumber}&nbsp;{props.addressStreetName}</Typography>
                                <Typography variant='p'>{props.addressCity},&nbsp;{props.addressState}&nbsp;{props.addressPostcode}</Typography>
                            </CardContent>
                            <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Button onClick={props.handlePrevClick} variant="contained" sx={buttonStyle}>
                                    Prev
                                </Button>
                                <Button onClick={props.handleNextClick} variant="contained" sx={buttonStyle}>
                                    Next
                                </Button>
                            </Container>
                        </Container>
                    </Card>    
                </Box>
            </Modal>
        </div>
    );
}