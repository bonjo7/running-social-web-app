import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from './Constantans';
import cloudURL from '../Services/Cloud';
import authToken from '../Services/AuthToken';

export const loadUser = () => async dispatch => {

  if(localStorage.token){
      authToken(localStorage.token);
  }
  try{
    const res = await axios.get(cloudURL() +'/lib/routes/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    // dispatch(loadUser());
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
      dispatch(loadUser());
      } catch (error){

        dispatch({
            type: REGISTER_FAIL
        });
      }
};

export const login = (email, password) => async dispatch => {

  const config ={
      headers: { 'Content-Type': 'application/json'}
    }

    const body = JSON.stringify({email, password});

    try{
    const res = await axios.post(cloudURL() + '/lib/routes/auth',body, config);

    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    });
    dispatch(loadUser());
    } catch (error){
      
      dispatch({
          type: LOGIN_FAIL
      });
    }
};

export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE});
  dispatch({ type: LOGOUT});
}

