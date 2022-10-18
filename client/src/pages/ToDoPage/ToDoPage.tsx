import React from 'react';
import styled from 'styled-components';
import * as S from './ToDoPage.style';
const ToDoPage = () => {
  return (
    <ToDoPageWrapper>
      <h1>ToDo</h1>
      <input /> <button>추가</button>
      <ul>
        <li>
          <input type="checkbox" />
          <span>할일</span>

          <button> 수정</button>
          <button> 삭제</button>
        </li>
      </ul>
    </ToDoPageWrapper>
  );
};

export default ToDoPage;

const ToDoPageWrapper = styled.div`
  padding: 40px;
`;
