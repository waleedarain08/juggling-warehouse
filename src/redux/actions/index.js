import {ERROR, FETCHED, FETCHING, USER_LOGIN, USER_LOGOUT, USER_REGISTER_PROCESSING} from '../constants';
import base_url from '../api/base_url';
import { getApi, putApi, postApi, patchApi } from '../api';
import { getDataFromAsyncStorage } from '../../helper/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
// export function userLogin(username, password) {
//   return dispatch => {
//     dispatch({type: USER_LOGIN, userData: {username, password}});
//   };
// }

export function userLogin(data) {
  return async dispatch => {
    const userData = await getApi(`${base_url}/user/signin`, '', data.token)
    data.user = userData.data.data
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
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCHING })
      let token = await getDataFromAsyncStorage('token')
      let { data } = await putApi(`${base_url}/user/`, obj, token.token)

      const {userData} = getState().user;

      userData.user = data.data
      dispatch({ type: FETCHED })
      if (data.isSuccess) {
          Alert.alert("Success", "Profile Updated Successfully")
          dispatch({type: USER_LOGIN, payload: userData});
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

export const updateProfilePicture = (uri) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCHING })
      let token = await getDataFromAsyncStorage('token')
      let { data } = await patchApi(`${base_url}/user/edit-profile`, { "profilePicture": uri }, token.token)

      const {userData} = getState().user;

      userData.user = data.data
      dispatch({ type: FETCHED })
      if (data.isSuccess) {
          dispatch({type: USER_LOGIN, payload: userData});
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