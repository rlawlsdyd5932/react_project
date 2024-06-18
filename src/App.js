import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<div>Home Page</div>} />
            <Route path="/customer" element={<div>Customer Management Page</div>} />
            <Route path="/honeypot" element={<div>Honeypot Management Page</div>} />
            <Route path="/events" element={<div>Events Page</div>} />
            <Route path="/announcements" element={<div>Announcements Page</div>} />
            <Route path="/support" element={<div>Support Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
