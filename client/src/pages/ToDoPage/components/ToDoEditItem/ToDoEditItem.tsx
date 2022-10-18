import React, { useState } from 'react';
import { Todo } from '../../../../api/Api';

const ToDoEditItem = ({ todo, id, handleEdit }: ToDoEditItemProps) => {
  const [text, setText] = useState(todo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input onChange={handleChange} value={text} />
      </div>
      <div>
        <button onClick={handleEdit}> 제출</button>
        <button onClick={handleEdit}> 취소</button>
      </div>
    </>
  );
};

export default ToDoEditItem;

type ToDoEditItemProps = {
  handleEdit: () => void;
} & Pick<Todo, 'id' | 'todo'>;
