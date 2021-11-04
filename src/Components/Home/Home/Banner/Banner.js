import React from 'react';
import Grid from '@mui/material/Grid';
import banner from '../../../../images/chair.png';
import bg from '../../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
}
const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} style={{ ...verticalCenter, textAlign: 'left'}} md={6}>
                    <Box>
                    <Typography variant='h3'>
                    Your New Smile <br/>
                    Starts here
                    </Typography>
                    <Typography variant='h6'  sx={{ my: 3, fontSize: 14, color: 'gray', fontWeight: 300}}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus architecto repellendus quidem quasi laudantium iusto voluptatibus voluptas eaque omnis quos.
                    </Typography>
                    <Button variant="contained" style={{backgroundColor: '#5DF3E7'}}>Get Appoientment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} style={verticalCenter} md={6}>
                <img style={{width:'350px'}} src={banner} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;