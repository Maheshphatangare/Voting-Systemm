// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function PollList() {
//   const [polls, setPolls] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPolls = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/polls');
//         if (response.ok) {
//           const data = await response.json();
//           setPolls(data);
//         } else {
//           setError('Failed to load polls');
//         }
//       } catch (err) {
//         setError('Error fetching polls: ' + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPolls();
//   }, []);

//   if (loading) {
//     return <div className="container"><p className="loading-message">Loading polls...</p></div>;
//   }

//   if (error) {
//     return <div className="container"><p className="error-message">{error}</p></div>;
//   }

//   return (
//     <div className="container">
//       <h1 className="poll-list-title">Available Polls</h1>
//       {polls.length === 0 ? (
//         <p className="poll-list-empty">No polls available. <Link to="/create" className="create-poll-link">Create a poll</Link>.</p>
//       ) : (
//         <div className="poll-list">
//           {polls.map((poll) => (
//             <div key={poll.id} className="poll-card">
//               <h2 className="poll-card-title">{poll.question}</h2>
//               {poll.description && <p className="poll-card-description">{poll.description}</p>}
//               <div className="poll-card-actions">
//                 <Link to={`/polls/${poll.id}/vote`} className="vote-button">Vote</Link>
//                 <Link to={`/polls/${poll.id}/results`} className="results-button">View Results</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <Link to="/create" className="create-poll-button">Create New Poll</Link>
//     </div>
//   );
// }

// export default PollList; // 2 code
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../index.css';

// function PollList() {
//   const [polls, setPolls] = useState([]);
//   const [error, setError] = useState(null);
//   const [fetching, setFetching] = useState(true);

//   useEffect(() => {
//     const fetchPolls = async () => {
//       console.log('Fetching all polls from GET /polls');
//       try {
//         const response = await fetch('http://localhost:8080/polls');
//         console.log(`Response status: ${response.status}`);
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Polls data:', data);
//           if (!Array.isArray(data)) {
//             throw new Error('Invalid polls data: not an array');
//           }
//           setPolls(data);
//         } else {
//           const errorText = await response.text();
//           console.error(`Fetch failed: ${errorText}`);
//           setError(`Failed to load polls: ${errorText || response.status}`);
//         }
//       } catch (err) {
//         console.error('Fetch error:', err.message);
//         setError('Error fetching polls: ' + err.message);
//       } finally {
//         setFetching(false);
//       }
//     };
//     fetchPolls();
//   }, []);

//   const handleVoteClick = (pollId) => {
//     console.log(`Navigating to vote for pollId: ${pollId}`);
//   };

//   if (fetching) {
//     return <div className="container"><p className="loading-message">Loading polls...</p></div>;
//   }

//   if (error || !polls) {
//     return (
//       <div className="container error-container">
//         <p className="error-message">{error || 'No polls found'}</p>
//         <Link to="/create" className="create-poll-link">Create a New Poll</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="container">
//       <h1 className="page-title">Available Polls</h1>
//       {polls.length === 0 ? (
//         <div className="no-polls">
//           <p>No polls available</p>
//           <Link to="/create" className="create-poll-link">Create a New Poll</Link>
//         </div>
//       ) : (
//         <div className="poll-list">
//           {polls.map((poll) => {
//             if (!poll.id || isNaN(poll.id)) {
//               console.warn(`Skipping poll with invalid id:`, poll);
//               return null;
//             }
//             console.log(`Rendering poll with id: ${poll.id}`);
//             return (
//               <div key={poll.id} className="poll-item">
//                 <h2 className="poll-title">{poll.question}</h2>
//                 {poll.description && <p className="poll-description">{poll.description}</p>}
//                 <div className="poll-actions">
//                   <Link
//                     to={`/polls/${poll.id}/vote`}
//                     className="vote-link"
//                     onClick={() => handleVoteClick(poll.id)}
//                   >
//                     Vote
//                   </Link>
//                   <Link to={`/polls/${poll.id}/results`} className="results-link">
//                     View Results
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//           <Link to="/create" className="create-poll-link">Create a New Poll</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PollList;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function PollList() {
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState(null);
  const [fetching, setFetching] = useState(true);

  const fetchPolls = async () => {
    console.log('Fetching all polls from GET /polls');
    try {
      const response = await fetch('http://localhost:8080/polls', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(`Response status: ${response.status}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Polls data:', data);
        if (!Array.isArray(data)) {
          throw new Error('Invalid polls data: not an array');
        }
        setPolls(data);
        setError(null);
      } else {
        const errorText = await response.text();
        console.error(`Fetch failed: ${errorText}`);
        setError(`Failed to load polls: ${errorText || response.status}`);
      }
    } catch (err) {
      console.error('Fetch error:', err.message);
      setError('Error fetching polls: ' + err.message);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  const handleVoteClick = (pollId) => {
    console.log(`Navigating to vote for pollId: ${pollId}`);
  };

  const handleDeletePoll = async (pollId) => {
    console.log(`Deleting poll with ID: ${pollId}`);
    try {
      const response = await fetch(`http://localhost:8080/polls/${pollId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(`Delete response status: ${response.status}`);
      if (response.ok) {
        console.log(`Poll ${pollId} deleted successfully`);
        await fetchPolls(); // Refresh poll list
      } else {
        const errorText = await response.text();
        console.error(`Delete failed: ${errorText || response.status}`);
        setError(`Failed to delete poll: ${errorText || 'Server error'}`);
      }
    } catch (err) {
      console.error('Delete error:', err.message);
      setError('Error deleting poll: ' + err.message);
    }
  };

  if (fetching) {
    return <div className="container"><p className="loading-message">Loading polls...</p></div>;
  }

  if (error || !polls) {
    return (
      <div className="container error-container">
        <p className="error-message">{error || 'No polls found'}</p>
        <Link to="/create" className="create-poll-link">Create a New Poll</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Available Polls</h1>
      {polls.length === 0 ? (
        <div className="no-polls">
          <p>No polls available</p>
          <Link to="/create" className="create-poll-link">Create a New Poll</Link>
        </div>
      ) : (
        <div className="poll-list">
          {polls.map((poll) => {
            if (!poll.id || isNaN(poll.id)) {
              console.warn(`Skipping poll with invalid id:`, poll);
              return null;
            }
            console.log(`Rendering poll with id: ${poll.id}`);
            return (
              <div key={poll.id} className="poll-item">
                <h2 className="poll-title">{poll.question}</h2>
                {poll.description && <p className="poll-description">{poll.description}</p>}
                <div className="poll-actions">
                  <Link
                    to={`/polls/${poll.id}/vote`}
                    className="vote-link"
                    onClick={() => handleVoteClick(poll.id)}
                  >
                    Vote
                  </Link>
                  <Link to={`/polls/${poll.id}/results`} className="results-link">
                    View Results
                  </Link>
                  <button
                    className="delete-button"
                    onClick={() => handleDeletePoll(poll.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <Link to="/create" className="create-poll-link">Create a New Poll</Link>
        </div>
      )}
    </div>
  );
}

export default PollList;