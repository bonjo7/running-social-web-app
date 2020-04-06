import { SET_ALERT} from './Constantans';
import * as uuid from 'uuid';

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id}
    });
};