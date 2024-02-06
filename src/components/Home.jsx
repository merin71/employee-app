import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import './Home.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: '1px solid white',
    backgroundColor:'#DE975d',
    
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Home = () => {

    const [data,setData] = useState([]);
    useEffect( () => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) =>{
      setData(res.data)
    })
  },[])
    // const [employees, setEmployees] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //       setEmployees(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  return (
    <TableContainer component={Paper} className="table-container"  >
    <Table sx={{ minWidth: '400'}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <StyledTableRow
            key={row.id}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>
        
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home