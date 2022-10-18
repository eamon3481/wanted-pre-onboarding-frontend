import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LoginPage/LogInPage';
import SignUpPage from '../pages/SignInPage/SignUpPage';
import ToDoPage from '../pages/ToDoPage';
import { tokenStorage } from '../utils/tokenStorage';
import { ProtectedRoute } from './ProtectedRoute';

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            tokenStorage.getAuthToken() ? (
              <Navigate replace to={'/todo'} />
            ) : (
              <LogInPage />
            )
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
