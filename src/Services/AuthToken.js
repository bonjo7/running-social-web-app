import axios from 'axios';

const authToken = token => {
    if(token) {
        axios.defaults.headers.common['user-token-header'] = token;
    }else{
        delete axios.defaults.headers.common['user-token-header'];
    }
}

export default authToken;