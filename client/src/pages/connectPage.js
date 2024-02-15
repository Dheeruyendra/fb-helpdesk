// ConnectPage.js

import React, { useState } from 'react';
import axios from 'axios';

const ConnectPage = () => {

  const [pageDetails, setPageDetails] = useState(null);


  const connectPage = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/connect', { withCredentials: true });
      console.log(response.data);
      setPageDetails(response.data);


    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 md:w-1/2 lg:w-2/5 xl:w-2/5 relative">
        <h2 className="text-2xl font-semibold mb-4">Facebook Page Integration</h2>
        <div>
          <button onClick={connectPage} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Connect Page</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
