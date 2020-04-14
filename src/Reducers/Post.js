import { GET_POSTS, POST_ERROR, ADD_LIKES, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT } from "../Actions/Constantans";

const initialState = {
  posts: [],
  post: null,
  loading: true,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
      case ADD_POST:
        return {
          ...state,
          posts: [payload, ...state.posts],
          loading: false
        };  
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, positives: payload.positives } : post
        ),
        loading: false
      };
    
    case DELETE_POST:
      return{
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case GET_POST:
      return{
        ...state,
        post: payload,
        loading: false
      };  
      case ADD_COMMENT:
        return{
          ...state,
          posts: {comments: payload, ...state.post}
        };
    default:
      return state;
  }
}
