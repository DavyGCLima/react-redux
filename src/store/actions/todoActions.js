export function addTodoAction(nome) {
  return { type: 'ADD_TODO', todo: { nome } };
}

export function removeTodoAction(id) {
  return { type: 'REMOVE_TODO', todo: { id } };
}
