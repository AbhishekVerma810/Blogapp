import { combineReducers } from 'redux';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
