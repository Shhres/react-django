import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UploadButton from './components/upload';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
  import { jwtDecode } from 'jwt-decode';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
        {/* Detect page can be accessed without authentication */}
        <Route
          path="/detect"
          element={<UploadButton buttonText="Upload and Detect" />}
        />
        {/* Protected Route Example */}
        <Route
          path="/detect"
          element={
            <RequireAuth>
              <UploadButton buttonText="Upload and Detect" />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.exp * 1000 > Date.now(); // Check if token is expired
  }
  return false;
};

export default App;
