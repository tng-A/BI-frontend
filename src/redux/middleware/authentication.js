import { put, call, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import AuthenticationService from '../../services/authentication';
import {
  login,
  loginSuccess,
  loginFailure,
  registration,
  registrationFailure,
  registrationSuccess
} from '../actionCreators/authentication';


export function* watchLogin(){
    yield takeEvery(login().type, loginAsync)
}

export function* loginAsync({payload}){
    try {
        const response = yield call(AuthenticationService.loginEndpoint, payload)
        yield put(loginSuccess({...response}))
        toast.success("Login Successful", {
            position: toast.POSITION.TOP_RIGHT
          });

    }catch(error){
        console.log(error, '>>>>>>>>>>>>>>')
        yield put(loginFailure(error));
        toast.error(`${error.response.data.non_field_errors[0]}`, {
            position: toast.POSITION.TOP_RIGHT
          });
    }
}

export function* watchRegister(){
    yield takeEvery(registration().type, registerAsync)
}

export function* registerAsync({payload}){
    try {
        const response = yield call(AuthenticationService.registerEndpoint, payload)
        yield put(registrationSuccess({...response}))
        toast.success("Registration Successful", {
            position: toast.POSITION.TOP_RIGHT
          });

    }catch(error){
        console.log(error, '}}}}}}}}}}')
        yield put(registrationFailure(error));
        // toast.error(`${error.response.data.company}`, {
        //     position: toast.POSITION.TOP_RIGHT
        //   });
    }
}