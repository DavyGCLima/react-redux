const INICIAL_STATE = {
  favorites: [],
  loading: false,
  error: null,
};

export default function favorites(state = INICIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORETE_REQUEST':
      return { ...state, loading: true };

    case 'ADD_FAVORETE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        favorites: [...state.favorites, action.payload.data],
      };

    case 'ADD_FAVORETE_FAILUERE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
