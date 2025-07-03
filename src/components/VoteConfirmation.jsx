import React from 'react';
import { Link } from 'react-router-dom';

function VoteConfirmation() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Vote Confirmation</h1>
      <p className="text-lg text-gray-600 mb-4">Thank you for voting!</p>
      <p className="text-lg text-gray-600 mb-8">Your vote has been successfully submitted.</p>
      <Link to="/polls" className="text-blue-600 hover:underline text-lg">
        Back to Polls
      </Link>
    </div>
  );
}

export default VoteConfirmation;