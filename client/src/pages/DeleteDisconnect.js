import React from 'react';


const DeleteDisconnectPage = ({ pid, replyMessages }) => {
  return (
    <section className="delete-disconnectpage bg-blue-900 min-h-screen flex justify-center items-center">
      <div className="delete-disconnect-box bg-white w-96 h-80 rounded-lg flex flex-col justify-center items-center">
        <div className="form-value">
          <h2 className="text-2xl font-semibold mb-4">
            Facebook Page Integration
          </h2>

          <h3 className="text-2xl font-semibold mb-4">
            Integrated Page: <b>{pid}</b>
          </h3>

          <div className="delete w-full mb-3">
            <button
              className="w-full h-10 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete Integration
            </button>
          </div>

          <div className="reply w-full">
            <button
              className="w-full h-10 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={replyMessages}
            >
              Reply To Messages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteDisconnectPage;
