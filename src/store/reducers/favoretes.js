const INICIAL_STATE = {
  favorites: [],
  loading: false,
};

export default function favorites(state = INICIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORETE_REQUEST':
      return { ...state, loading: true };

    case 'ADD_FAVORETE_SUCCESS':
      return {
        ...state,
        loading: false,
        favorites: [...state.favorites, action.payload.data],
      };

    default:
      return state;
  }
}
