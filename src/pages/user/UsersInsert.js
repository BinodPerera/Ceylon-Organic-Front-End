import React, { useState } from 'react';

const UsersInsert = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your insert logic here, e.g., sending data to an API
        console.log('User data submitted:', user);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">User Registration</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder='Name'
                        onChange={handleChange}
                        className="form-control mb-1" 
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        value={user.email}
                        onChange={handleChange}
                        className="form-control mb-1" 
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={user.password}
                        onChange={handleChange}
                        className="form-control mb-2" 
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Insert User</button>
            </form>
        </div>
    );
};

export default UsersInsert;