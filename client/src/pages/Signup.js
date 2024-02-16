// SignupPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
  
    try{
      const response = await axios.post('http://localhost:8000/api/signup', user, {withCredentials: true});
      if(response.status === 200){
        alert('Account created successfully');
        navigate('/login');
      }
    }catch(err){
      alert('Error creating account');
    }
    setName('');
    setEmail('');
    setPassword('');
  }



  return (
    <div className="min-h-screen bg-indigo-900 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 md:w-1/2 lg:w-2/5 xl:w-2/5">
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" name="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm font-medium text-gray-700">Remember me</label>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </div>
    </div>
  );
};

export default SignupPage;


