import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EmployeeManagementPage from './pages/EmployeeManagementPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/employee-management" element={<EmployeeManagementPage />} />
        {/* Future pages can be added here as more Route components */}
      </Routes>
    </Router>
  );
}

export default App;
