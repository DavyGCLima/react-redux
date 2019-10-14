import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoreteSuccess } from '../actions/favoretesActions';

export function* addFavorite(action) {
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

  const respositoryData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_url,
  };

  yield put(addFavoreteSuccess(respositoryData));
}
