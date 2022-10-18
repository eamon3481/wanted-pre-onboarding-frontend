import React, { useState } from 'react';
import { Todo } from '../../../../api/Api';

const ToDoItem = ({ todo, id, isCompleted }: Todo) => {
  const [isEdit, setIsEdit] = useState(false);
  return <div>ToDoItem</div>;
};

export default ToDoItem;
