// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import CertificateForm from './components/CertificateForm';
import './App.css'; // Import custom CSS file for styling

// LandingPage.js

function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <span className="navbar-brand">TuteDude</span>
        <div className="navbar-links">
          <Link to="/certificate-form" className="btn btn-primary">Generate Certificate</Link>
          <Link to="/admin-dashboard" className="btn btn-primary">View Certificates</Link>
        </div>
      </nav>
      <div className="landing-content">
        <h1>Welcome to TuteDude Certificate Management System</h1>
        <p>Streamline your certificate generation process with ease.</p>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/certificate-form" element={<CertificateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
