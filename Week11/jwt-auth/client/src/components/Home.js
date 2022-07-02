import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Home = (props) => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [expirationTime, setExpirationTime] = useState('');

    const { accessToken } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const decode = jwt_decode(accessToken);
            setUserId(decode.userId);
            setEmail(decode.email);
            const expirationTime = decode.exp;
            setExpirationTime(new Date(expirationTime * 1000).toString());
    
            // check if expiration time is over, if it is navigate to login
            if (expirationTime * 1000 < new Date().getTime()) {
                navigate('/login');
            }
        } catch (err){
            console.log(err);
        }
    },[])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get('/users')
                setUsers(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        getUsers()
    }, [])
    return (
        <>
            <div>
                <h1>Home</h1>
                <div>
                    <h3>{userId}</h3>
                    <h3>{email}</h3>
                    <h3>{expirationTime}</h3>
                </div>
            </div>
            <div>
                {
                    users.map(item => {
                        return (
                            <div key={item.id}>
                                {item.email} {item.password}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;