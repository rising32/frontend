import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/error/ErrorBoundary';
import Core from './containers/base/Core';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Helmet>
        <title>IDL Management Toolkit</title>
        <meta name='description' content='IDL Management Toolkit.' />
      </Helmet>
      <ErrorBoundary>
        <Routes>
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route index element={<LoginPage />} />
        </Routes>
      </ErrorBoundary>
      <Core />
    </>
  );
}

export default App;
