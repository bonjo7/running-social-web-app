import axios from "axios";
import { setAlert } from "./Alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
  GET_PROFILES
} from "./Constantans";
import cloudURL from "../Services/Cloud";

export const getCurrentprofile = () => async (dispatch) => {
  try {
    const res = await axios.get(cloudURL() + "/lib/routes/profile/myprofile");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const createProfile = (formData, edit = false) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      cloudURL() + "/lib/routes/profile",
      formData,
      config
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert(
        edit
          ? "Your profile has been updated successfully"
          : "Your have successfully created your profile, woohoo",
        "success"
      )
    );
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addRace = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put(
      cloudURL() + "/lib/routes/profile/race",
      formData,
      config
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert("Your have successfully added your race details", "success")
    );
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteRace = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(
      cloudURL() + `/lib/routes/profile/deleterace/${id}`
    );

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Successfully deleted race", "success"));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (
    window.confirm(
      "Confirm you wish to delete your account, this can not be undone!"
    )
  ) {
    try {
      const res = await axios.delete(
        cloudURL() + "/lib/routes/profile/deleteaccount"
      );

      dispatch({ type: DELETE_ACCOUNT });
      dispatch({ type: CLEAR_PROFILE });

      dispatch(
        setAlert(
          "You have deleted your account, sorry to see you go",
          "warning"
        )
      );
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};


export const getAllProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get(cloudURL() + "/lib/routes/profile/all");
    
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getUserProfile = userId => async (dispatch) => {
  try {
    const res = await axios.get(cloudURL() + `/lib/routes/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};