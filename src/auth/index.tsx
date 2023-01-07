import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <h1>Page Not Found !!</h1>
        </>
    );
};

const Protected = ({ children }: any) => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : 'false';
    if (!JSON.parse(isLoggedIn) === true) {
        navigate('/');
        return <PageNotFound />
    }
    return children;
};
export default Protected;
