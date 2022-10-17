import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogInPage from '../pages/LogInPage';
import ToDoPage from '../pages/ToDoPage';

export const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/todo" element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
