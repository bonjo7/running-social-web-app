import authToken from './authToken';
import Axios from 'axios';
import cloudURL from './cloud';

export const loadUser = async () =>  {
    if(localStorage.token){
        authToken(localStorage.token);
    }

    try{
        await Axios.get(cloudURL() + '/lib/routes/auth');
    }catch(error){
        console.log(error.response.data);
    }
}