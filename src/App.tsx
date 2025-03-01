import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LabourDepartment from './pages/LabourDepartment';
import SkillDevelopment from './pages/SkillDevelopment';
import Employment from './pages/Employment';
import Documents from './pages/Documents';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

function App() {
  const { session } = useAuth();
  
  return (
    <Routes>
      <Route path="/login" element={!session ? <Login /> : <Navigate to="/" />} />
      <Route path="/" element={session ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/labour" element={session ? <LabourDepartment /> : <Navigate to="/login" />} />
      <Route path="/skill" element={session ? <SkillDevelopment /> : <Navigate to="/login" />} />
      <Route path="/employment" element={session ? <Employment /> : <Navigate to="/login" />} />
      <Route path="/documents" element={session ? <Documents /> : <Navigate to="/login" />} />
      <Route path="/analytics" element={session ? <Analytics /> : <Navigate to="/login" />} />
      <Route path="/settings" element={session ? <Settings /> : <Navigate to="/login" />} />
      <Route path="/help" element={session ? <Help /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;