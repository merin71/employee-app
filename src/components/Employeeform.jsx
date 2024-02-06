import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Employeeform.css';

const Employeeform = () => {
    const [employeeDatas, setEmployeeDatas] = useState([]);
    var[employeeData, setEmployeeData]= useState({name: "", designation: "", location: "", salary: ""});
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({ ...employeeData, [name]: value});
        // setEmployeeData(() => ({
        //   ...employeeData,[name]: value,
        // }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log(employeeData);
        setEmployeeDatas([...employeeDatas, employeeData]);
        setEmployeeData({name: '', designation: '', location: '', salary: ''});
        // event.preventDefault();
        // Here, you can handle the submission logic, e.g., send the data to the server or perform other actions
        // console.log('Button submit:', employeeData);
      };
  return (
    <div className='container'>
      <form className='form-container' onSubmit={handleSubmit}>
      <div className='form-header'>
      <Typography varient='h1' style={{textAlign:'center', fontSize: '24px', color: '#1976d2'}}><b>Employee form</b></Typography>
      
      </div>
      <br />
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <label htmlFor="name"></label>
          <TextField
           fullWidth
           label="Name"
           type="text" 
           name="name" 
           id="name"
           sx={{ backgroundColor: 'white' }}
           size='small'
           value={employeeData.name} 
           onChange={handleInputChange}
           autoComplete="Name"
          />
        </Grid>
        
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <label htmlFor="designation"></label>
          <TextField
            fullWidth
            label="Designation"
            type="text"
            name="designation"
            id="designation"
            sx={{ backgroundColor: 'white' }}
            size='small'
            value={employeeData.designation}
            onChange={handleInputChange}
            autoComplete="Designation"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <label htmlFor="location"></label>
          <TextField
            fullWidth
            label="Location"
            type="text"
            name="location"
            id="location"
            sx={{ backgroundColor: 'white' }}
            size='small'
            value={employeeData.location}
            onChange={handleInputChange}
            autoComplete="Location"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <label htmlFor="salary"></label>
          <TextField
           fullWidth
           label="Salary"
           type="number" 
           name="salary" 
           id="salary"
           sx={{ backgroundColor: 'white' }}
           size='small'
           value={employeeData.salary} 
           onChange={handleInputChange}
           autoComplete="Salary"
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button type="submit" variant="contained" size="small" style={{alignItems:'center'}} >Submit</Button>
        </Grid>
      </Grid>
      </form>
    </div>
  )
}

export default Employeeform
