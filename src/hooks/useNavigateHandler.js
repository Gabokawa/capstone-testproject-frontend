import { useNavigate } from 'react-router-dom';

const useNavigateHandler = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return handleButtonClick;
};

export default useNavigateHandler;