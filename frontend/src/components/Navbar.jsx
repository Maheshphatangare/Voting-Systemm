// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-green-300 shadow-lg">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//         <div className="flex items-center justify-between">
//           <NavLink to="/" className="text-white text-2xl font-bold tracking-tight sm:text-3xl">
//             Polling System
//           </NavLink>
//           <div className="hidden md:flex items-center space-x-6">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-white font-semibold border-b-2 border-white pb-1'
//                   : 'text-white hover:text-gray-200 transition duration-200'
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/create"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-white font-semibold border-b-2 border-white pb-1'
//                   : 'text-white hover:text-gray-200 transition duration-200'
//               }
//             >
//               Create Poll
//             </NavLink>
//             <NavLink
//               to="/polls"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'text-white font-semibold border-b-2 border-white pb-1'
//                   : 'text-white hover:text-gray-200 transition duration-200'
//               }
//             >
//               View Polls
//             </NavLink>
//             <input
//               type="text"
//               placeholder="Search polls..."
//               className="px-3 py-2 rounded-lg border border-gray-300 text-white bg-green-400 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
//             />
//             <NavLink to="/profile" className="text-white">
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5.121 18.879A9 9 0 1112 3a9 9 0 01-6.879 15.879zM12 13a3 3 0 100-6 3 3 0 000 6z"
//                 />
//               </svg>
//             </NavLink>
//           </div>
//           <button
//             className="md:hidden text-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//               />
//             </svg>
//           </button>
//         </div>
//         {isOpen && (
//           <div className="md:hidden mt-4 space-y-2">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'block text-white font-semibold bg-green-400 py-2 px-4 rounded'
//                   : 'block text-white hover:bg-green-400 py-2 px-4 rounded transition duration-200'
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/create"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'block text-white font-semibold bg-green-400 py-2 px-4 rounded'
//                   : 'block text-white hover:bg-green-400 py-2 px-4 rounded transition duration-200'
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               Create Poll
//             </NavLink>
//             <NavLink
//               to="/polls"
//               className={({ isActive }) =>
//                 isActive
//                   ? 'block text-white font-semibold bg-green-400 py-2 px-4 rounded'
//                   : 'block text-white hover:bg-green-400 py-2 px-4 rounded transition duration-200'
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               View Polls
//             </NavLink>
//             <input
//               type="text"
//               placeholder="Search polls..."
//               className="w-full px-3 py-2 rounded-lg border border-gray-300 text-white bg-green-400 placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
//             />
//             <NavLink
//               to="/profile"
//               className="block text-white hover:bg-green-400 py-2 px-4 rounded transition duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Profile
//             </NavLink>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink to="/" className="navbar-brand">
            Voting App System
          </NavLink>
          <div className="navbar-nav hidden md:flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Create Poll
            </NavLink>
            <NavLink
              to="/polls"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              View Polls
            </NavLink>
            <input
              type="text"
              placeholder="Search polls..."
              className="navbar-search"
            />
            <NavLink to="/profile" className="navbar-profile">
              <svg
                style={{ width: '2rem', height: '2rem' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 18.879A9 9 0 1112 3a9 9 0 01-6.879 15.879zM12 13a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </NavLink>
          </div>
          <button
            className="navbar-toggle md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {isOpen && (
          <div className="navbar-mobile md:hidden">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Create Poll
            </NavLink>
            <NavLink
              to="/polls"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              View Polls
            </NavLink>
            <input
              type="text"
              placeholder="Search polls..."
              className="navbar-search"
            />
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;