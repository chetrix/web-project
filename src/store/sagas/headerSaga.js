import {put, takeEvery, call} from 'redux-saga/effects';

export function* headerDataWatcherAsyn() {
    try {
        // const response = yield call (fetchHomeTemplate);
        // if (response.status>= 200 && response.status < 300) {
        //     const userData = yield response.data;
        //     yield put({type: actionTypes.HOME_TEMPLATE_LOADING_COMPLETE, payload: userData});
        // } else {
        //     throw response;
        // }
    } catch (error) {
        yield put ({type: 'LOAD_HEADER_DATA_ERROR', payload: error});
    }
}
export function* headerDataWatcher() {
    yield takeEvery('LOAD_HEADER_DATA', headerDataWatcherAsyn);
}
export const headerSaga=[
    headerDataWatcher(),
];