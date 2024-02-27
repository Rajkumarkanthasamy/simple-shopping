import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import React from 'react';
import SignUpPage from "./Pages/SignUpPage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, RequireAuth } from './Auth'
import HomePage from './HomePage';

function App() {
  return (
   <React.Fragment>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<LoginPage />} />   
      <Route path="/signup" element={<SignUpPage />} />
      <Route path={"/HomePage"}  element={<RequireAuth><HomePage/></RequireAuth>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
