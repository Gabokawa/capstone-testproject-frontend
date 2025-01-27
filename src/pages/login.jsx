import React from 'react';
import useNavigateHandler from '../hooks/useNavigateHandler';
import { useState } from 'react';
import axios from 'axios';


const Landing = () => {
    const handleButtonClick = useNavigateHandler();

    const [warning, setWarning] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            const response = await axios.post('http://localhost:5000/users/login', {
                username,
                password
            });

            if (response.data.message === 'Login successful') {
                console.log('Login successful');
                handleButtonClick(response.data.redirectPath);
            } else {
                setWarning(response.data.message);
            }
        } catch (error) {
            if (error.response) {
                // The server responded with an error status
                setWarning(error.response.data.message || 'An error occurred');
            } else {
                setWarning('Connection error. Please try again.');
            }
            console.log('Error details:', error.response?.data);
        }
    };

    return (
        <div>
            <button onClick={() => handleButtonClick('/')}>Back</button>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            {warning && <p>{warning}</p>}
        </div>
    );
};

export default Landing;