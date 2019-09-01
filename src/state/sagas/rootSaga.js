import { all } from 'redux-saga/effects';
import dashboardSaga from './dashboardSaga';
import loginSaga from './loginSaga';
import signupSaga from './signupSaga'
import userListSaga from './userListSaga'
import siteListSaga from './siteListSaga'

export default function* rootSaga() {
    yield all([
        loginSaga(),
        signupSaga(),
        dashboardSaga(),
        userListSaga(),
        siteListSaga()
    ]);
}