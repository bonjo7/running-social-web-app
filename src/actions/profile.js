import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR} from './constantans';
import cloudURL from '../services/cloud';

export const getCurrentprofile = () => async dispatch => {
    try{
        const res = await axios.get(cloudURL() + '/lib/routes/profile/myprofile');

        dispatch({
            type:  GET_PROFILE,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status: error.response.status}
        });
    }
}