export function addFavoreteRequest(repository) {
  return { type: 'ADD_FAVORETE_REQUEST', payload: { repository } };
}

export function addFavoreteSuccess(data) {
  return { type: 'ADD_FAVORETE_SUCCESS', payload: { data } };
}

export function addFavoreteFailure(error) {
  return { type: 'ADD_FAVORETE_FAILUERE', payload: { error } };
}
