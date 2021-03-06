import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({date}) => {
    const {user, token} = useAuth();
    const [appointments, setAppointments]= useState();
    useEffect(()=>{
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url,{
          headers:{
            'authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data =>setAppointments(data))
    }, [date, user.email, token])
    return (
        <div>
            <h3>Appointments {appointments?.length}</h3>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="appointment table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments?.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell align="right">{appointment.time}</TableCell>
              <TableCell align="right">{appointment.serviceName}</TableCell>
              <TableCell align="right">{appointment.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;