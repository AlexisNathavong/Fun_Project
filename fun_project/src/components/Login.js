import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/LoginReducer';
import axios from 'axios';


const Login = () => {
    const [user, setNewUser] = useState({username: '', password: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});
    };

    const login = e => {
        e.preventDefault();

        axios.post('', user)
            .then(res => {
                console.log('login success: ', res)

                localStorage.setItem('token', res.data.payload);

                dispatch({ type: 'LOGIN', payload: res.data});
            })
            .catch(err => {
                console.log('login fail: ', err.res)
            })
        setNewUser('');
    }
    console.log(state);

    return (
        <form>
            <div className='login-group'>
                <label>Username: </label>

                <input
                    className='login-group'
                    type='username'
                    name='username'
                    value={user.username}
                    onChange={handleChanges}
                />
                
            </div>

            <div className='login-group'>
                <label>Password: </label>

                <input
                    className='login-group'
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChanges}
                />

            </div>

            <button onClick={login}>Login</button>

        </form>
    )
};


export default Login;