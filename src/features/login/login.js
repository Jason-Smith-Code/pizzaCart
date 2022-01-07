import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// We need to import all the reducers and functions here
import { signIn } from './loginSlice';

// This is essentially a component, here we are going to be returning JSX
// We need to use useSelector to pull in the data from the store.
// We need to use useDispatch to make changes to that store data

export function Login() {
    const dispatch = useDispatch(); 
    const loggedIn = useSelector(state => state.login);
    //console.log(`The loggedin state is ${loggedIn}`);

    // here we simply want to change the login state from false to true, and vice-verse
    // at a later stage I may implement an actual login, with registration
    return (
        <div>
            {loggedIn ? 
            <button
                aria-label="Log in"
                onClick={() => dispatch(signIn())}
            >Logout</button> : 
            <button
                aria-label="Log in"
                onClick={() => dispatch(signIn())}
            >Login</button>}    
        </div>
    );
}