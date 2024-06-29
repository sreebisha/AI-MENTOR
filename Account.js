import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Account = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSaveChanges = () => {
        setProfileData(formData);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Account Settings
            </Typography>
            <TextField
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
            />
            <TextField
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSaveChanges}>
                Save Changes
            </Button>

            {profileData.username && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" component="div" gutterBottom>
                        Profile Information
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                        <strong>Username:</strong> {profileData.username}
                    </Typography>
                    <Typography variant="body1" component="div" gutterBottom>
                        <strong>Email:</strong> {profileData.email}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Account;
