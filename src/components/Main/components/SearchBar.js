import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBar(props) {
    const [searchInput, setSearchInput] = useState("");
    const updateSearchInput = (event) => setSearchInput(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateQuery(searchInput);
    }

    return (
        <Box sx={{ 
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Search by Name" 
                    variant="outlined"
                    value={searchInput}
                    onChange={updateSearchInput}
                />
                <Button 
                    variant='contained'
                    type='submit'
                    sx={{
                        height: '54px',
                        marginLeft: '12px'
                    }} 
                >
                    Search
                </Button>
            </form>
        </Box>
    )
}