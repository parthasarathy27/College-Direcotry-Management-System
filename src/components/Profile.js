import React, { useEffect, useState } from 'react';
import UserService from '../services/UserService';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        UserService.getProfile().then(data => setProfile(data));
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            {profile && (
                <div>
                    <img src={profile.photo} alt="Profile" />
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    <p>Phone: {profile.phone}</p>
                    {/* Additional details */}
                </div>
            )}
        </div>
    );
};

export default Profile;
