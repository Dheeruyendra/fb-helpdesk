import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };

        try {
            const response = await axios.post('http://localhost:8000/api/login', user, { withCredentials: true });
            if (response.status === 200) {
                localStorage.setItem("jwtToken", response.data.token);
                alert('Login successful');
                navigate('/connectPage');
            }
        } catch (err) {
            alert('Error logging in');
        }
        setEmail('');
        setPassword('');
    }

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 md:w-1/2 lg:w-2/5 xl:w-2/5">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                onChange = {handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
            <input 
                 type="password" 
                 id="password" 
                 name="password"
                 onChange = {handleChange} 
                 className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Login</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">New to MyApp? <Link to="/" className="text-blue-600">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
