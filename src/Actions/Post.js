import axios from 'axios';
import { setAlert} from './Alert';
import {GET_POSTS, POST_ERROR} from './Constantans';
import cloudURL from "../Services/Cloud";

export const getPosts = () => async dispatch => {
    try{
        const result = await axios.get(cloudURL() + "/lib/routes/posts/allposts")

        dispatch({
            type: GET_POSTS,
            payload: result.data
        })
    }catch(error){
        dispatch({
            type: POST_ERROR,
            payload: {msg:error.response.statusText, status: error.response.status}
        });
    }
}