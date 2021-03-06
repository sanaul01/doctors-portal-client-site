
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const {user, registerUser, isLoding, authError} = useAuth()

    const handleOnBlur = e =>{
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };
    const handleLogin = e =>{
        if(loginData.password !== loginData.password2){
            alert('Password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</ Typography>
                {!isLoding && <form onSubmit={handleLogin}>
                    <TextField 
                    sx={{width:'75%', m: 1}}
                    id="standard-basic" 
                    label="Your Name" 
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <TextField 
                    sx={{width:'75%', m: 1}}
                    id="standard-basic" 
                    label="Your Email" 
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                    <TextField 
                    sx={{width:'75%', m: 1}}
                    id="standard-basic" 
                    label="Password" 
                    name="password"
                    onBlur={handleOnBlur}
                    type="password"
                    variant="standard" />
                    <TextField 
                    sx={{width:'75%', m: 1}}
                    id="standard-basic" 
                    label="Conform Password" 
                    name="password2"
                    onBlur={handleOnBlur}
                    type="password"
                    variant="standard" />
                    <Button sx={{width:'75%', m: 1}} variant='contained' type='submit'>Register</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/login">
                    <Button variant="text">Already register? Please login</Button>
                    </NavLink>
                </form>}
                {isLoding && <CircularProgress color="secondary" />}
                {user?.email && <Alert severity="success">Register successfully</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                   <img style={{width: '100%'}} src={login} alt=""/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;