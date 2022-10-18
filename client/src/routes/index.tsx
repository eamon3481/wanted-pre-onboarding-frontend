import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LoginPage/LogInPage';
import SignUpPage from '../pages/SignInPage/SignUpPage';
import ToDoPage from '../pages/ToDoPage/ToDoPage';
import { ProtectedRoute } from './ProtectedRoute';
import { RedirectRoute } from './RedictRoute';

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectRoute>
              <LogInPage />
            </RedirectRoute>
          }
        />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <ToDoPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
