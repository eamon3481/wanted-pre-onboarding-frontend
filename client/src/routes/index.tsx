import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LoginPage/LogInPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import ToDoPage from '../pages/ToDoPage';

export const RootRoute = () => {
  let isLogIn = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/todo"
          element={isLogIn ? <ToDoPage /> : <Navigate replace to={'/'} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
