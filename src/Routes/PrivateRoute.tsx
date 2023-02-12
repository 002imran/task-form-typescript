import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
const PrivateRoute = (props: { Component: any; }) => {

     const { Component } = props;
     const navigate = useNavigate();
     useEffect(() => {
        console.log('PrivateRoute useEffect called');
        let userName = localStorage.getItem('userName');
        if (!userName) {
            navigate('/');
            toast.error("Please Give The Valid Information First")

        }
    }, [])

    return (
        <div>
            <Component />

        </div>
    );
};

export default PrivateRoute;






