import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Appointment/Booking/Booking';

const bookings=[
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM',
        space: 9
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '11:30 AM - 1:00 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '2:45 PM - 4:10 PM',
        space: 8
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '4:30 PM - 6:00 PM',
        space: 7
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '6:30 PM - 8:00 PM',
        space: 6
    }
]

const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography sx={{ color: 'info.main', mb: 3}} variant="h5">
            Available Appointment on {date.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking
                    key={booking.id}
                    booking={booking}
                    date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;