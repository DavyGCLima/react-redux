const INICIAL_STATE = {
  favorites: [],
};

export default function favorites(state = INICIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORETE_SUCCESS':
      return {
        ...state,
        favorites: [...state.favorites, action.payload.data],
      };

    default:
      return state;
  }
}
