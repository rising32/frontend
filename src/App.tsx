import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/error/ErrorBoundary';
import MainLayout from './components/main/MainLayout';
import Core from './containers/base/Core';
import MainAccountPage from './pages/account/MainAccountPage';
import MainDeliverablePage from './pages/deliverable/MainDeliverablePage';
import LoginPage from './pages/LoginPage';
import MainPriorityPage from './pages/priority/MainPriorityPage';
import RegisterPage from './pages/RegisterPage';
import MainStatisticPage from './pages/statistic/MainStatisticPage';
import MainTaskPage from './pages/task/MainTaskPage';

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
          <Route element={<MainLayout />}>
            <Route path='tasks' element={<MainTaskPage />} />
            <Route path='priorities' element={<MainPriorityPage />} />
            <Route path='deliverables' element={<MainDeliverablePage />} />
            <Route path='statistics' element={<MainStatisticPage />} />
            <Route path='account' element={<MainAccountPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
      <Core />
    </>
  );
}

export default App;
