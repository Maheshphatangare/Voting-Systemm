// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar.jsx';
// // import Home from './components/Home.jsx';
// // import PollList from './components/PollList.jsx';
// // import CreatePoll from './components/CreatePoll.jsx';
// // import VotePoll from './components/VotePoll.jsx';
// // import PollResults from './components/PollResults.jsx';
// // import VoteConfirmation from './components/VoteConfirmation.jsx';

// // function App() {
// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-gray-100">
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/polls" element={<PollList />} />
// //           <Route path="/create" element={<CreatePoll />} />
// //           <Route path="/polls/:id/vote" element={<VotePoll />} />
// //           <Route path="/polls/:id/results" element={<PollResults />} />
// //           <Route path="/vote-confirmation" element={<VoteConfirmation />} />
// //           <Route path="/profile" element={<div className="container mx-auto py-16 text-center">Profile Page (Placeholder)</div>} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx';
// import Home from './components/Home.jsx';
// import PollList from './components/PollList.jsx';
// import CreatePoll from './components/CreatePoll.jsx';
// import VotePoll from './components/VotePoll.jsx';
// import PollResults from './components/PollResults.jsx';
// import VoteConfirmation from './components/VoteConfirmation.jsx';

// class ErrorBoundary extends Component {
//   state = { hasError: false };
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }
//   render() {
//     if (this.state.hasError) {
//       return <div className="container" style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>Something went wrong.</div>;
//     }
//     return this.props.children;
//   }
// }

// function App() {
//   return (
//     <Router>
//       <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
//         <Navbar />
//         <ErrorBoundary>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/polls" element={<PollList />} />
//             <Route path="/create" element={<CreatePoll />} />
//             <Route path="/polls/:id/vote" element={<VotePoll />} />
//             <Route path="/polls/:id/results" element={<PollResults />} />
//             <Route path="/vote-confirmation" element={<VoteConfirmation />} />
//             <Route path="/profile" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Profile Page (Placeholder)</div>} />
//             <Route path="/about" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>About Page (Placeholder)</div>} />
//             <Route path="/features" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Features Page (Placeholder)</div>} />
//             <Route path="/security" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Security Page (Placeholder)</div>} />
//             <Route path="/industries" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Industries Page (Placeholder)</div>} />
//             <Route path="/sitemap" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Sitemap Page (Placeholder)</div>} />
//             <Route path="/privacy" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Privacy Policy Page (Placeholder)</div>} />
//             <Route path="/terms" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Terms & Conditions Page (Placeholder)</div>} />
//           </Routes>
//         </ErrorBoundary>
//       </div>
//     </Router>
//   );
// }
// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import PollList from './components/PollList.jsx';
import CreatePoll from './components/CreatePoll.jsx';
import VotePoll from './components/VotePoll.jsx';
import PollResults from './components/PollResults.jsx';
import VoteConfirmation from './components/VoteConfirmation.jsx';

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="container" style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/polls" element={<PollList />} />
            <Route path="/create" element={<CreatePoll />} />
            <Route path="/polls/:id/vote" element={<VotePoll />} />
            <Route path="/polls/:id/results" element={<PollResults />} />
            <Route path="/vote-confirmation" element={<VoteConfirmation />} />
            <Route path="/profile" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Profile Page (Placeholder)</div>} />
            <Route path="/about" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>About Page (Placeholder)</div>} />
            <Route path="/features" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Features Page (Placeholder)</div>} />
            <Route path="/security" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Security Page (Placeholder)</div>} />
            <Route path="/industries" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Industries Page (Placeholder)</div>} />
            <Route path="/sitemap" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Sitemap Page (Placeholder)</div>} />
            <Route path="/privacy" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Privacy Policy Page (Placeholder)</div>} />
            <Route path="/terms" element={<div className="container" style={{ textAlign: 'center', padding: '4rem' }}>Terms & Conditions Page (Placeholder)</div>} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}
export default App;