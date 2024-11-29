import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Admin/Dashboard';
import ManageUsers from './components/Admin/ManageUsers';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin/dashboard"
          element={<PrivateRoute role="Admin"><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/admin/users"
          element={<PrivateRoute role="Admin"><ManageUsers /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
};

export default App;
