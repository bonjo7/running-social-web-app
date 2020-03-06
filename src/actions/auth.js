import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL} from './constantans';
import cloudURL from '../services/cloud';

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