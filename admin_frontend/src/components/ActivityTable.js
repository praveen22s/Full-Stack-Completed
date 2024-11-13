import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Box, Typography, TableContainer } from '@mui/material';
import axios from 'axios';.

const HallTable = () => {
  const [halls, setHalls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/v1/bookings'); // Ensure this URL is correct
        console.log('Halls fetched:', response.data); // Log the data for debugging
        setHalls(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message || error); // Log detailed error message
        setError('Failed to fetch data');
      }
    };

    fetchHalls();
  }, []);

  return (
    <TableContainer 
      component={Paper} 
      sx={{ mt: 3, maxHeight: '400px', overflowY: 'auto' }} // Set maxHeight and overflow
    >
      <Box p={2}>
        <Typography variant="h6">Available Halls</Typography>
        {error && <Typography color="error">{error}</Typography>}
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {halls.length > 0 ? (
            halls.map((hall) => (
              <TableRow key={hall.id}>
                <TableCell>{hall.name}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: hall.status === 'Booked' ?'#d4edda' :  '#f8d7da',
                      color: hall.status === 'Booked' ? '#721c24' : '#155724',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      display: 'inline-block',
                    }}
                  >
                    {hall.status}
                  </Box>
                </TableCell>
                <TableCell>{hall.venue}</TableCell>
                <TableCell>{hall.date}</TableCell>
                <TableCell>{hall.time}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>No halls found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HallTable;
