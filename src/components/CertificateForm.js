import React, { useState } from 'react';
import axios from 'axios';
import './CertificateForm.css'; // Import CSS file for styling

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    date: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/generate-certificate', formData);
      // Clear form after submission
      setFormData({ name: '', email: '', course: '', date: '' });
      // You may add a success message here
    } catch (error) {
      console.error('Error submitting certificate request:', error);
    }
  };

  return (
    <div className="certificate-form-container">
      <h2 className="form-title">Certificate Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CertificateForm;
