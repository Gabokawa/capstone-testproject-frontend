import React, { use } from 'react';
import '../styles/mainstyle.css';
import useNavigateHandler from '../hooks/useNavigateHandler';

const Landing = () => {
    const handleButtonClick = useNavigateHandler();
    return (
        <div>
            <h1>Landing Page</h1>
            <button onClick={() => handleButtonClick('/login')}>Login</button>
            <p>No account yet?</p>
            <button onClick={() => handleButtonClick('/signup')}>Signup</button>
        </div>
    );
};

export default Landing;