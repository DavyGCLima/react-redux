import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoreteSuccess, addFavoreteFailure } from '../actions/favoretesActions';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select((state) =>
      state.favorites.find((favorite) => data.id === favorite.id));

    if (isDuplicated) {
      yield put(addFavoreteFailure('Este repositório já foi adicionado!'));
    } else {
      const respositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      yield put(addFavoreteSuccess(respositoryData));
    }
  } catch (error) {
    yield put(addFavoreteFailure(`Erro ao realizar busca, ${error.code}`));
  }
}
