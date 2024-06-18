import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Customer from './Customer';



function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto', height: '100vh' }}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
