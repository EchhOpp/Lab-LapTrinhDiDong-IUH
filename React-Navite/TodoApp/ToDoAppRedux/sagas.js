import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS } from './actions';

function* fetchTodosSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
    const data = yield response.json();
    yield put({ type: 'FETCH_TODOS_SUCCESS', data });
  } catch (e) {
    yield put({ type: 'FETCH_TODOS_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga);
}
