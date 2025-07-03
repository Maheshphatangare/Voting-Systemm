import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreatePoll() {
  const [poll, setPoll] = useState({
    question: '',
    description: '',
    options: [{ text: '' }, { text: '' }],
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    if (index !== undefined) {
      const newOptions = [...poll.options];
      newOptions[index].text = e.target.value;
      setPoll({ ...poll, options: newOptions });
    } else {
      setPoll({ ...poll, [e.target.name]: e.target.value });
    }
  };

  const addOption = () => {
    setPoll({ ...poll, options: [...poll.options, { text: '' }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (poll.options.length < 2) {
      setError('Please provide at least two options');
      return;
    }
    if (poll.options.some(option => !option.text.trim())) {
      setError('All options must have text');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/polls/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(poll),
      });
      if (response.ok) {
        navigate('/polls');
      } else {
        setError('Failed to create poll');
      }
    } catch (err) {
      setError('Error creating poll: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Create a New Poll</h1>
      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Creating poll...</p>}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question" className="form-label">Poll Title</label>
            <input
              type="text"
              name="question"
              value={poll.question}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter poll title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Poll Description</label>
            <input
              type="text"
              name="description"
              value={poll.description}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter poll description"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Options</label>
            {poll.options.map((option, index) => (
              <div key={index} className="form-option">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleInputChange(e, index)}
                  className="form-input"
                  placeholder={`Option ${index + 1}`}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addOption}
              className="btn-secondary"
              disabled={loading}
            >
              Add Option
            </button>
          </div>
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            Create Poll
          </button>
        </form>
      </div>
      <Link to="/polls" className="back-link">
        Back to Polls
      </Link>
    </div>
  );
}

export default CreatePoll;