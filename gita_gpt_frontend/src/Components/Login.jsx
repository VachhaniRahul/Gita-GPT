import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import api from '../api';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const handleLogin = async (e) => {

        e.preventDefault()
        try {
            const res = await api.post('api/login/', { username, password })
            console.log(" Login Respose: ", res.data)
            if (res) {
                localStorage.setItem('access', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
                navigate("/")
            }
            else {
                navigate("/login")
            }


        } catch (error) {
            alert(error)
        }
    }

    return (
        <Box
            sx={{
                backgroundColor: '#000',
                color: '#fff',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '30px',
                    backgroundColor: '#121212',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        color: '#f57903',
                    }}
                >
                    Login
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <TextField
                        variant="outlined"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        InputProps={{
                            style: { color: '#fff', borderColor: '#f57903' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#fff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#f57903',
                                },
                            },
                        }}
                    />
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#fff',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#f57903',
                                },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                        sx={{
                            backgroundColor: '#f57903',
                            color: '#fff',
                            padding: '10px',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#e66a02',
                            },
                        }}
                    >
                        Login
                    </Button>
                </Box>
                <Typography
                    sx={{
                        marginTop: '20px',
                        fontSize: '14px',
                        color: '#aaa',
                    }}
                >
                    Don't have an account?{' '}
                    <Typography
                        component="span"
                        sx={{ color: '#f57903', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        <a href="/register" > Sign Up</a>
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginPage;
