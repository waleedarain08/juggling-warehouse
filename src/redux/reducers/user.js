import {USER_LOGIN, USER_LOGOUT, FETCHED, ERROR, FETCHING} from '../constants';

const initialState = {
  loading: false,
  loggedin: false,
  userData: {},
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        loading: false,
        loggedin: true,
        userData: {...action.userData},
      };
    case USER_LOGOUT:
      return {
        loading: false,
        loggedin: false,
        userData: {},
      };
    case FETCHING:
      return {
        ...state,
        loading: true,
      };
    case FETCHED:
      return {
        ...state,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userInfo;
