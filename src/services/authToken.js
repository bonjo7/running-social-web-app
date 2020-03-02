import axois from 'axois'

const setToken = token => {
    if(token) {
        axois.defaults.headers.common['user-token-header'] = token;
    }else{
        delete axois.defaults.headers.common['user-token-header'];
    }
}

export default authToken;