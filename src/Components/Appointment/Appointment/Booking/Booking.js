import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
    const [openBooing, setOpenBooking] = React.useState(false);
    const handleopenBooing = () => setOpenBooking(true);
    const handleCloseBooking = () => setOpenBooking(false);

    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py: 5}}>
            <Typography sx={{ color: 'info.main', fontWeight:600}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} SPACES AVAILABLE
            </Typography>
            <Button onClick={handleopenBooing} variant="contained">Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        handleCloseBooking={handleCloseBooking}
        openBooing={openBooing}
        ></BookingModal>
        </>
    );
};

export default Booking;