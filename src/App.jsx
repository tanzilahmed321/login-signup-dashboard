// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import Dashboard from './component/Dashboard';
import Profile from './component/Dashboard/Profile';
import Settings from './component/Dashboard/Settings';
import Analytics from './component/Dashboard/Analytics';
import Notifications from './component/Dashboard/Notifications';
import Reports from './component/Dashboard/Reports';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard with nested routes */}
        <Route path="/dashboard/*" element={<ProtectedRoute element={Dashboard} />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    
  );
}

export default App;
