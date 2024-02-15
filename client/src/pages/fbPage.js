// ConnectPage.js

import React, { useState } from 'react';
import axios from 'axios';

const ConnectPage = () => {
  const [accessToken, setAccessToken] = useState('');

  const connectPage = async () => {
    try {
      await axios.post('/api/facebook/connect', { accessToken });
      // Handle success (e.g., show success message)
    } catch (err) {
      console.error(err.response.data);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 md:w-1/2 lg:w-2/5 xl:w-2/5">
        <h2 className="text-2xl font-semibold mb-4">Facebook Page Integration</h2>
        <button onClick={connectPage} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Connect Page</button>
      </div>
    </div>
  );
};

export default ConnectPage;
