import React from 'react';
import { ToDoProvider } from './components/ToDoContext/ToDoContext';
import { ToDoList } from './components/ToDoList/ToDoList';
import * as S from './ToDoPage.style';
const ToDoPage = () => {
  return (
    <S.ToDoPageWrapper>
      <h1>ToDo</h1>
      <ToDoProvider>
        <ToDoList />
      </ToDoProvider>
    </S.ToDoPageWrapper>
  );
};

export default ToDoPage;
