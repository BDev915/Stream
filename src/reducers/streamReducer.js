/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, isSignedIn: false, userId: null };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FETCH_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case CREATE_STREAM:
//       return { ...state, [action.payload.id]: action.payload };
//     case EDIT_STREAM:
//       return { ...state, isSignedIn: false, userId: null };

//     case FETCH_STREAMS:
//       return { ...state, isSignedIn: false, userId: null };
//     case DELETE_STREAM:
//       return { ...state, isSignedIn: false, userId: null };
//     default:
//       return state;
//   }
// };
