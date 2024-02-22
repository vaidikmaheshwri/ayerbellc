import { getUserFailure, getUserSuccess } from '../slice/userSlice';
import API from '../utils/Apis'
import { takeLatest, put, call ,all} from 'redux-saga/effects';
export function *loginUser(signInData){
    
   try{
    
    const response= yield call(axios.post,API.login, {signInData});
    const userData = response;
    yield put(getUserSuccess(userData));


   }catch(e){
    yield put (getUserFailure(e.message));
   }
   
      
}