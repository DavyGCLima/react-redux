const INICIAL_STATE = {
  todos: [{ id: 0, nome: 'todo 1' }],
};

function todos(state = INICIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { id: Math.random(), nome: action.todo.nome }] };

    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.todo.id) };

    default:
      return state;
  }
}

export default todos;
