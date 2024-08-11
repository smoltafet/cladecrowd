// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailsPage from './pages/Details/DetailsPage';
// import Auth from './pages/auth';
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Header from './components/Header';
import Footer from './components/Footer';
import AuthProvider from './context/AuthContext'; // Import AuthProvider
import About from './pages/About';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
           <Route path="/" element={<LandingPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<About />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
