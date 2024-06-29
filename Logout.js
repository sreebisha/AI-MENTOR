import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        // Perform logout logic here (e.g., clearing tokens, user data)
        // After logout logic, redirect to the Account page
        history.push('/account');
    }, [history]);

    return (
        <div>
            Logging out...
        </div>
    );
};

export default Logout;
