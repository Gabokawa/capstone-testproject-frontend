import React from 'react';
import useNavigateHandler from '../hooks/useNavigateHandler';


const Landing = () => {
    const handleButtonClick = useNavigateHandler();
    return (
        <div>
            <button onClick={() => handleButtonClick('/')}>Back</button>
            <h1>Signup Page</h1>
        </div>
    );
};

export default Landing;