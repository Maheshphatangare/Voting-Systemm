
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import '../index.css';

// function VotePoll() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [poll, setPoll] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!id || id === 'undefined' || isNaN(parseInt(id))) {
//       setError('Invalid poll ID');
//       return;
//     }

//     const fetchPoll = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/polls/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setPoll(data);
//         } else {
//           setError('Failed to load poll');
//         }
//       } catch (err) {
//         setError('Error fetching poll');
//       }
//     };
//     fetchPoll();
//   }, [id]);

//   const handleVote = async (e) => {
//     e.preventDefault();
//     if (!selectedOption) {
//       setError('Please select an option');
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost:8080/polls/${id}/vote?optionId=${selectedOption}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (response.ok) {
//         navigate(`/polls/${id}/results`);
//       } else {
//         setError('Failed to submit vote');
//       }
//     } catch (err) {
//       setError('Error submitting vote');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (error) {
//     return (
//       <div className="container error-container">
//         <p className="error-message">{error}</p>
//         <Link to="/polls" className="back-link">Back to Polls</Link>
//       </div>
//     );
//   }

//   if (!poll) {
//     return <div className="container"><p className="loading-message">Loading poll...</p></div>;
//   }

//   return (
//     <div className="container">
//       <div className="poll-container">
//         <h1 className="poll-title">{poll.question}</h1>
//         {poll.description && <p className="poll-description">{poll.description}</p>}
//         <form onSubmit={handleVote}>
//           <div className="poll-options">
//             {poll.options && poll.options.map((option) => (
//               <div key={option.id} className="poll-option">
//                 <input
//                   type="radio"
//                   name="option"
//                   value={option.id}
//                   checked={selectedOption === option.id}
//                   onChange={() => setSelectedOption(option.id)}
//                   className="poll-radio"
//                   required
//                 />
//                 <label className="poll-option-label">{option.text}</label>
//               </div>
//             ))}
//           </div>
//           <button type="submit" className="vote-button" disabled={loading}>
//             Cast Vote
//           </button>
//         </form>
//         <Link to="/polls" className="back-link">Back to Polls</Link>
//       </div>
//     </div>
//   );
// }

// export default VotePoll;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../index.css';

function VotePoll() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id || id === 'undefined' || isNaN(parseInt(id))) {
      setError('Invalid poll ID');
      return;
    }

    const fetchPoll = async () => {
      try {
        const response = await fetch(`http://localhost:8080/polls/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPoll(data);
        } else {
          setError('Failed to load poll');
        }
      } catch (err) {
        setError('Error fetching poll');
      }
    };
    fetchPoll();
  }, [id]);

  const handleVote = async (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError('Please select an option');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/polls/${id}/vote?optionId=${selectedOption}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        navigate(`/polls/${id}/results`);
      } else {
        setError('Failed to submit vote');
      }
    } catch (err) {
      setError('Error submitting vote');
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="container error-container">
        <p className="error-message">{error}</p>
        <Link to="/polls" className="back-link">Back to Polls</Link>
      </div>
    );
  }

  if (!poll) {
    return <div className="container"><p className="loading-message">Loading poll...</p></div>;
  }

  return (
    <div className="container">
      <div className="poll-container">
        <h1 className="poll-title">{poll.question}</h1>
        {poll.description && <p className="poll-description">{poll.description}</p>}
        <form onSubmit={handleVote}>
          <div className="poll-options">
            {poll.options && poll.options.map((option) => (
              <div key={option.id} className="poll-option">
                <input
                  type="radio"
                  name="option"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="poll-radio"
                  required
                />
                <label className="poll-option-label">{option.text}</label>
              </div>
            ))}
          </div>
          <button type="submit" className="vote-button" disabled={loading}>
            Cast Vote
          </button>
        </form>
        <Link to="/polls" className="back-link">Back to Polls</Link>
      </div>
    </div>
  );
}

export default VotePoll;