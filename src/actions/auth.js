import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR} from './constantans';
import cloudURL from '../services/cloud';
import authToken from '../services/authToken';

export const loadUser = () => async dispatch => {

  if(localStorage.token){
      authToken(localStorage.token);
  }
  try{
    const res = await axios.get('/lib/route/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  }catch(error){
    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const register = ({name, email, password}) => async dispatch => {

    const config ={
        headers: { 'Content-Type': 'application/json'}
      }

      const body = JSON.stringify({name, email, password});

      try{
      const res = await axios.post(cloudURL() + '/lib/routes/users',body, config);

      dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
      });
      } catch (error){

        dispatch({
            type: REGISTER_FAIL
        });
      }
};

