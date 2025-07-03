
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="container mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight sm:text-5xl">
//         Welcome to the Online Polling System
//       </h1>
//       <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//         Create and vote on polls with ease! Engage with your community in a seamless and interactive way.
//       </p>
//       <div className="flex justify-center space-x-4">
//         <Link
//           to="/create"
//           className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 font-medium text-base sm:text-lg"
//         >
//           Create New Poll
//         </Link>
//         <Link
//           to="/polls"
//           className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 font-medium text-base sm:text-lg"
//         >
//           View Polls
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Secure, Transparent, and Easy Voting with Voting App</h1>
        <p className="hero-subtitle">
          Voting App is your trusted platform for creating and managing online elections effortlessly.
        </p>
        <Link to="/create" className="btn-primary">
          Start Your Election
        </Link>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <h2 className="section-title">Trusted By</h2>
        <div className="trusted-brands">
          <div className="brand-logo">Partner A</div>
          <div className="brand-logo">Partner B</div>
          <div className="brand-logo">Partner C</div>
          <div className="brand-logo">Partner D</div>
          <div className="brand-logo">Partner E</div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <p className="section-text">
          Voting App is dedicated to revolutionizing online voting with secure, transparent, and auditable
          solutions for organizations, unions, and communities. Owned by Voting App Technologies, we’ve been
          pioneering e-voting solutions since 2025, ensuring seamless elections for all.
        </p>
      </section>

      {/* Security Section */}
      <section className="security-section">
        <h2 className="section-title">Security</h2>
        <p className="section-text">
          Our e-voting platform is built with industry-leading security standards you can trust.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fully Auditable</h3>
            <p>Every vote, process, and system is fully auditable for complete transparency.</p>
          </div>
          <div className="feature-card">
            <h3>Highly Secure</h3>
            <p>End-to-end encryption protects every step of the voting process.</p>
          </div>
          <div className="feature-card">
            <h3>Transparent Voting</h3>
            <p>Eliminate duplicate votes with timestamped, printable vote records.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Ballots</h3>
            <p>Each ballot is encrypted to prevent tampering and ensure integrity.</p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <p className="section-text">Secure, cloud-based elections for any organization.</p>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Seamless Voting</h3>
            <p>Accessible, user-friendly platform for voting anytime, anywhere.</p>
          </div>
          <div className="feature-card">
            <h3>Secure Access</h3>
            <p>OTP-based authentication ensures voter privacy and security.</p>
          </div>
          <div className="feature-card">
            <h3>Anonymous Ballots</h3>
            <p>Voter anonymity prevents intimidation or vote manipulation.</p>
          </div>
          <div className="feature-card">
            <h3>Instant Results</h3>
            <p>Accurate, real-time results published instantly to voters.</p>
          </div>
          <div className="feature-card">
            <h3>Advanced Analytics</h3>
            <p>Real-time voting stats for organizers and scrutinizers.</p>
          </div>
          <div className="feature-card">
            <h3>Election Oversight</h3>
            <p>Assign scrutinizers to verify and certify the voting process.</p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section">
        <h2 className="section-title">Industries We Serve</h2>
        <div className="industries-grid">
          <div className="industry-card">
            <h3>Corporate Elections</h3>
            <p>Secure voting for shareholder meetings and corporate AGMs.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
          <div className="industry-card">
            <h3>Student Elections</h3>
            <p>Engage students in university and club elections with ease.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
          <div className="industry-card">
            <h3>Social Clubs</h3>
            <p>Streamlined e-voting for annual member elections in clubs.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
          <div className="industry-card">
            <h3>Opinion Polls</h3>
            <p>Gather public or company feedback with instant, reliable polls.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
          <div className="industry-card">
            <h3>RWA Elections</h3>
            <p>Fast, accurate voting for resident welfare associations.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
          <div className="industry-card">
            <h3>Housing Societies</h3>
            <p>Effortless online voting for cooperative housing societies.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
          <div className="industry-card">
            <h3>Union Elections</h3>
            <p>Efficient e-voting for union candidate selection.</p>
            <Link to="/polls" className="read-more">Read More</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">
          Reach out to explore our secure e-voting solutions for your organization.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-input" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input type="tel" id="mobile" className="form-input" placeholder="Enter your mobile number" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" className="form-input" placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-input form-textarea" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Voting App</h3>
            <p>Contact: +1 123-456-7890</p>
            <p>Email: <a href="mailto:maheshphatangare420@gmail.com">support@voting-App.com</a></p>
            <p>Address: 123 Tech Lane, Innovation PUNE, INDIA</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/industries">Who Uses Voting App?</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Help & Support</h3>
            <ul>
              <li><Link to="/privacy">Privacy & Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li>
                Technical Support: +1 987-654-3210<br />
                (9:00 AM to 5:00 PM, Mon-Fri)<br />
                Email: <a href="mailto:help@voteeasy.com">help@voteeasy.com</a> (Weekends)
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Subscribe Now</h3>
            <form className="subscribe-form">
              <input type="email" className="form-input" placeholder="example@gmail.com" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
            <p>Follow Us on Social Media</p>
            <div className="social-links">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
              <a href="#" className="social-icon">LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="footer-copy">Copyright © 2025 Voting App . All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;