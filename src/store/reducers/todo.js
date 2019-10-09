const INICIAL_STATE = {
  todos: [
    {
      id: 0,
      nome: 'todo1',
    },
  ],
};

function todos(state = INICIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default todos;
