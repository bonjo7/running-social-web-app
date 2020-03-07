import authToken from './authToken';
import Axios from 'axios';
import cloudURL from './cloud';
import { USER_LOADED, AUTH_ERROR} from '../actions/constantans';

export const loadUser =() => async dispatch =>  {
    if(localStorage.token){
        
    }

    try{
        const res = await Axios.get(cloudURL() + '/lib/routes/auth');
        authToken(localStorage.token);
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }catch(error){
        dispatch({
            type: AUTH_ERROR
        })
        console.log(error.response.data);
    }
}