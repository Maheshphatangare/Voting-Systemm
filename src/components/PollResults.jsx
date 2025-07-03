import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PollResults() {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await fetch(`http://localhost:8080/polls/${id}/results`);
        if (response.ok) {
          const data = await response.json();
          setPoll(data);
        } else {
          setError('Failed to load poll results');
        }
      } catch (err) {
        setError('Error fetching poll results: ' + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPoll();
  }, [id]);

  if (loading) {
    return <div className="container"><p className="loading-message">Loading results...</p></div>;
  }

  if (error || !poll) {
    return (
      <div className="container">
        <p className="error-message">{error || 'Poll not found'}</p>
        <Link to="/polls" className="back-link">Back to Polls</Link>
      </div>
    );
  }

  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="container">
      <div className="results-container">
        <h1 className="results-title">{poll.question}</h1>
        {poll.description && <p className="results-description">{poll.description}</p>}
        <div className="results-options">
          {poll.options.map((option) => {
            const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
            return (
              <div key={option.id} className="results-option">
                <span className="results-option-text">{option.text}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  >
                    {option.votes} {option.votes === 1 ? 'vote' : 'votes'} ({percentage.toFixed(1)}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/polls" className="back-link">Back to Polls</Link>
      </div>
    </div>
  );
}

export default PollResults;