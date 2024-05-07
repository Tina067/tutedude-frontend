import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [certificateRequests, setCertificateRequests] = useState([]);

  useEffect(() => {
    fetchCertificateRequests();
  }, []);

  const fetchCertificateRequests = async () => {
    try {
      const response = await axios.get('/api/certificates');
      setCertificateRequests(response.data);
    } catch (error) {
      console.error('Error fetching certificate requests:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {certificateRequests.map(request => (
          <li key={request._id}>
            Name: {request.name}, Course: {request.course}, Date: {request.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
