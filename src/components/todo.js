import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTodoAction, removeTodoAction } from '../store/actions/todoActions';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function addTodo(nome) {
    dispatch(addTodoAction(nome));
  }

  function removeTodo(id) {
    dispatch(removeTodoAction(id));
  }

  return (
    <>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.nome}
              <button type="button" onClick={() => removeTodo(todo.id)}>Remover</button>
            </li>
          ))
        }
      </ul>
      <button type="button" onClick={() => addTodo('teste')}>Adicionar</button>
    </>
  );
}

export default TodoList;
