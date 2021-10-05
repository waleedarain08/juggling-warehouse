import {ERROR, FETCHED, FETCHING, USER_LOGIN, USER_LOGOUT, USER_REGISTER_PROCESSING} from '../constants';
import base_url from '../api/base_url';
import { getApi, patchApi, postApi } from '../api';
import { getDataFromAsyncStorage } from '../../helper/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
// export function userLogin(username, password) {
//   return dispatch => {
//     dispatch({type: USER_LOGIN, userData: {username, password}});
//   };
// }

export function userLogin(data) {
  return dispatch => {
    dispatch({type: USER_LOGIN, payload: data});

  };
}

export function userLogout() {
  return dispatch => {
    AsyncStorage.clear()
    dispatch({type: USER_LOGOUT});
  };
}

export const userRegister = (user, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
      let { data } = await postApi(`${base_url}/user/signup`, user, token)
      dispatch({ type: FETCHED })
      if (data.isSuccess) {
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

export const userSignin = (token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
      let { data } = await getApi(`${base_url}/user/signin`, '', token)
      
      if (data.isSuccess) {
          Alert.alert("Success", "User Signin Successfully")
          dispatch({type: USER_LOGIN, payload: data});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("userSignin Error", message)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message })
    }
  }
}

export const updateProfile = (obj) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
      let token = await getDataFromAsyncStorage('token')
      let { data } = await patchApi(`${base_url}/user/update`, obj, token.token)
      
      dispatch({ type: FETCHED })
      if (data.isSuccess) {
          Alert.alert("Success", "Profile Updated Successfully")
          return Promise.resolve({ status: true })

      } else {
        Alert.alert("error", data.message)
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("updateProfile Error", message)
      dispatch({ type: ERROR })

      return Promise.reject({ status: false, message })
    }
  }
}