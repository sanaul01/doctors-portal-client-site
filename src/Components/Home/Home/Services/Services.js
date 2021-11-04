import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import whitening from '../../../../images/whitening.png'

const services = [
    {
        name: "Fluride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        image: fluoride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        image: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facere eius officia fugiat qui rerum doloremque, fuga necessitatibus animi in!",
        image: whitening
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ fontWeight: 500,m: 2, color: 'success.main' }} variant="h6" component="div">
                Our Services
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                Services We Provide
            </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Service
                        key={service.name}
                        service ={service}
                        ></Service>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;