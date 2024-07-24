import React, { useState, useEffect } from 'react';
import FacultyService from '../services/FacultyService';

const UpdateProfile = () => {
    const [profile, setProfile] = useState({
        officeHours: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        FacultyService.getProfile().then(data => setProfile(data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await FacultyService.updateProfile(profile);
        alert('Profile updated successfully');
    };

    return (
        <div>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Office Hours:
                    <input type="text" name="officeHours" value={profile.officeHours} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />
                </label>
                <label>
                    Phone:
                    <input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
