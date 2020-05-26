import axios from "axios";
import swal from 'sweetalert';
import { setAlert } from "../Actions/Alert"
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./Constantans";
import cloudURL from "../Services/Cloud";
import authToken from "../Services/AuthToken";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    authToken(localStorage.token);
  }
  try {
    const res = await axios.get(cloudURL() + "/lib/routes/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    // dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
    swal({
      title: 'Login Eror',
      icon: 'error',
      text: 'No account exists with this email, please register an account'
    })
    
  }
};

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      cloudURL() + "/lib/routes/users",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => swal({
        title: 'Registration Eror',
        icon: 'error',
        text: error.msg + ' - Please try again with a different email addresss'
      }));
    }
    dispatch({
      type: REGISTER_FAIL,
    });

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(cloudURL() + "/lib/routes/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    swal({
      title: 'login Error',
      text: 'Login failed, ensure you are using the correct username and password'
    }
    )
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
