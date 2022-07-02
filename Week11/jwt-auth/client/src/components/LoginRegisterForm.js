import React, { useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../App';

const LoginRegisterForm = ({ title }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const {setAccessToken} = useContext(AppContext);

    useEffect(() => {
        setMsg('')
    }, []);

    const handleAction = async (id) => {

        if (id === 'Register') {
            try {
                let response = await axios.post('/register', {
                    email, password,
                }, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                });
                console.log('register response: ', response.data);
                setMsg(response.data.msg);
            } catch (err) {
                console.log(err);
                setMsg(err.response.data.msg);
            }

        } else if (id === 'Login'){
            try {
                let response = await axios.post('/login', {
                    email, password,
                }, {
                    withCredentials: true,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    }
                });
                setAccessToken(response.data.accessToken);
                navigate('/');

            } catch (err) {
                console.log(err.response.data.msg);
                setMsg(err.response.data.msg);
            }
        }
    }

    return (
        <div>
            <div className='heading-container'>
                <h3>{title} Form</h3>
            </div>
            <Box component={'form'} sx={{ m: 1 }} noValidate autoComplete='off'>
                <TextField sx={{ m: 1 }}
                    required
                    id='email'
                    label='Enter email'
                    variant='outlined'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField sx={{ m: 1 }}
                    required
                    id='password'
                    label='Enter password'
                    variant='outlined'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            <Button variant='contained' onClick={() => handleAction(title)} >
                {title}
            </Button>
            <Button variant='contained'>
                {title === 'Register' ? <Link to='/login'>Login</Link> : <Link to='/register'>Register</Link>}
            </Button>
            <div>
                {msg}
            </div>
        </div>
    )
}

export default LoginRegisterForm;