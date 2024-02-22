import { takeLatest, put, call ,all} from 'redux-saga/effects';
import { getUserFetch,getUserFailure,getUserSuccess } from '../slice/userSlice';
import { loginUser } from '../saga/loginUser';

export default function *sagas(){
    yield all([takeLatest(getUserFetch.type,loginUser)]);

}