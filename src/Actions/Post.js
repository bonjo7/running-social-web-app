import axios from "axios";
import { setAlert } from "./Alert";
import {
  GET_POSTS,
  POST_ERROR,
  ADD_LIKES,
  DELETE_POST,
  ADD_POST,
} from "./Constantans";
import cloudURL from "../Services/Cloud";

export const getPosts = () => async (dispatch) => {
  try {
    const result = await axios.get(cloudURL() + "/lib/routes/posts/allposts");

    dispatch({
      type: GET_POSTS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    const result = await axios.put(
      cloudURL() + `/lib/routes/posts/positive/${id}`
    );

    dispatch({
      type: ADD_LIKES,
      payload: { id, positives: result.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    await axios.delete(cloudURL() + `/lib/routes/posts/deletepost/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });

    dispatch(setAlert("Successfully deleted your post", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      cloudURL() + `/lib/routes/posts/createpost`,
      formData,
      config
    );

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Successfully created your post", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
