import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/SignUpReducer';
import axios from 'axios';

const SignUp = () => {
    const [user, setNewUser] = useState({name: '', username: '', password: '', confirm_password: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});
    };

    const signup = e => {
        e.preventDefault();

        axios.post('', user) 
            .then(res => {
                console.log(res)

                localStorage.setItem('token', res.data.payload);

                dispatch({ type: 'SIGNUP', payload: res.data});
            })

            .catch(err => {
                console.log(err.response)
            })
        setNewUser('');
    }

    console.log(state);

    return (
        <form>
            <div className='form-group'> 
            <label>Name: </label>

            <input
                className='form-group'
                type='name'
                name='name'
                value={user.name}
                onChange={handleChanges}
            />    

            </div>

            <div className='form-group'>
                <label>Username: </label>

                <input
                    className='form-group'
                    type='username'
                    name='username'
                    value={user.username}
                    onChange={handleChanges}
                />    

            </div>

            <div className='form-group'>
                <label>Password: </label>

                <input
                    className='form-group'
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChanges}
                />    

            </div>

            <div className='form-group'>
                <label>Confirm Password: </label>

                <input
                    className='form-group'
                    type='password'
                    name='confirm_password'
                    value={user.confirm_password}
                    onChange={handleChanges}
                />    

            </div>

            <button onClick={signup}>Submit</button>
        </form>
    )
};


export default SignUp;