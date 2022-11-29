import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import EmployeeCard from './components/EmployeeCard';
import SearchBar from './components/SearchBar';
import fetch from 'node-fetch';
import { useState } from 'react';
import { useEffect } from 'react';
import BasicModal from './components/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Main() {
    
    const [isLoading, setIsLoading] = useState(true)
    const [dbEmployees, setDbEmployees] = useState([]);
    const [displayedEmployees, setDisplayedEmployees] = useState([])

    const progressBar = (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )

    useEffect(() => {
        async function getEmployeeData() {
            const res = await fetch('https://randomuser.me/api/?results=10&nat=us');
            const data = await res.json();
            setDbEmployees(data.results);
            setDisplayedEmployees(data.results);
            setIsLoading(false)
        }
        getEmployeeData()
    }, [])

    const [open, setOpen] = useState(false)
    const [currentCardIndex, setCurrentCardIndex] = useState('')

    const employeeCardData = displayedEmployees.map((employee, index) => {
        return (
            <EmployeeCard 
                key={index}
                index={index}
                id={employee.login.uuid}
                img={employee.picture.large}
                firstName={employee.name.first}
                lastName={employee.name.last}
                email={employee.email}
                phone={employee.phone}
                addressStreetNumber={employee.location.street.number}
                addressStreetName={employee.location.street.name}
                addressCity={employee.location.city}
                addressState={employee.location.state}
                addressZip={employee.location.postcode}
                handleClick={() => {
                    setCurrentCardIndex(index)
                    setOpen(true)
                }}
            />
        )
    })

    const handleSearchQuery = (val) => {
        const filteredEmployees = dbEmployees.filter(employee => {
            return employee.name.first.toLowerCase().includes(val.toLowerCase())
            || employee.name.last.toLowerCase().includes(val.toLowerCase());
        });

        return setDisplayedEmployees(filteredEmployees)
    }
    
    const handleNextClick = () => {
        setCurrentCardIndex(prevState => {
                if (prevState === displayedEmployees.length - 1) {
                    return 0
                }
                return prevState + 1;
        })
    }
    
    const handlePrevClick = () => {
        setCurrentCardIndex(prevState => {
                if (prevState === 0) {
                    return displayedEmployees.length - 1;
                }
                return prevState - 1
        })
    }

    const employeeGrid =  (
        <Grid container direction='column' spacing={5}>
            {(!employeeCardData.length) ? <h4 style={{margin: "150px"}}>No Results</h4> : employeeCardData }  
        </Grid>
    )

    return (
        <Container sx={{ my: 10}}>
            <SearchBar 
                updateQuery={(val) => handleSearchQuery(val)}
            />
            <Container maxWidth="md">
                {(isLoading) ? progressBar : employeeGrid}
            </Container>
            <BasicModal 
                open={open}
                onClose={() => setOpen(false)}
                img={displayedEmployees[currentCardIndex]?.picture?.large}
                firstName={displayedEmployees[currentCardIndex]?.name?.first}
                lastName={displayedEmployees[currentCardIndex]?.name?.last}
                email={displayedEmployees[currentCardIndex]?.email}
                phone={displayedEmployees[currentCardIndex]?.phone}
                addressStreetNumber={displayedEmployees[currentCardIndex]?.location?.street?.number}
                addressStreetName={displayedEmployees[currentCardIndex]?.location?.street?.name}
                addressCity={displayedEmployees[currentCardIndex]?.location?.city}
                addressState={displayedEmployees[currentCardIndex]?.location?.state}
                addressPostcode={displayedEmployees[currentCardIndex]?.location?.postcode}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                />
        </Container>
    )
}

