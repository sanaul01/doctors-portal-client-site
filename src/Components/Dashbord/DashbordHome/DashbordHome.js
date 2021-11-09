import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashbordHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Calender
              date={date}
              setDate={setDate}
              ></Calender>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Appointments date={date}></Appointments>
            </Grid>
          </Grid>
    );
};

export default DashbordHome;