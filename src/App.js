import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Customer from './Customer';
import CustomerDetail from './Customerdetail';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '16px', overflowY: 'auto',height:'100%' }}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/:id" element={<CustomerDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
