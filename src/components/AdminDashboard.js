import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get('https://tutedude-backend.onrender.com/certificates');
      setCertificates(response.data.certificates);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Certificates</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Course</th>
            <th>Drive Link</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map(certificate => (
            <tr key={certificate._id}>
              <td>{certificate.name}</td>
              <td>{certificate.email}</td>
              <td>{new Date(certificate.date).toLocaleDateString()}</td>
              <td>{certificate.course}</td>
              <td>
                <a href={certificate.driveLink} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
