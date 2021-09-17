import {ERROR, FETCHED, FETCHING, USER_LOGIN, USER_LOGOUT, USER_REGISTER_PROCESSING} from '../constants';
import base_url from '../api/base_url';
import { postApi } from '../api';
// export function userLogin(username, password) {
//   return dispatch => {
//     dispatch({type: USER_LOGIN, userData: {username, password}});
//   };
// }

export function userLogin(token) {
  return dispatch => {
    dispatch({type: USER_LOGIN, userData: {token}});
  };
}


export function userLogout() {
  return dispatch => {
    dispatch({type: USER_LOGOUT});
  };
}


export const userRegister = (user, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
      let { data } = await postApi(`${base_url}/user/signup`, user, token)
      
      dispatch({ type: FETCHED })
      if (data.code == 200) {
          Alert.alert("Success", "User Registerd Successfully")
          return Promise.resolve({ status: true })

      } else {
        Alert.alert("error", data.message)
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("registration Error", message)
      dispatch({ type: ERROR })

      return Promise.reject({ status: false, message })
    }
  }
}