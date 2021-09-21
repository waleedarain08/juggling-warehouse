import { getDataFromAsyncStorage } from "../../helper/utils"
import { getApi } from "../api"
import base_url from "../api/base_url"
import { CATEGORY_CONTENT_FETCHED, CATEGORY_FETCHED, CONTENT_DETAILS_FETCHED, ERROR, FETCHING } from "../constants"



export const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/category`, '', token)
      
      if (data.code == 200) {
          dispatch({type: CATEGORY_FETCHED, payload: data});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
         dispatch({ type: ERROR })
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("getCategory Error", message)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message })
    }
  }
}



export const getCategoryContents = (catId, page = 1, count = 10) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/content/category/${catId}?page=${page}&count=${count}`, '', token)
      
      if (data.code == 200) {
          dispatch({type: CATEGORY_CONTENT_FETCHED, payload: data});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
         dispatch({ type: ERROR })
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("getCategoryContents Error", message)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message })
    }
  }
}



export const getContentDetails = (contentId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/content/${contentId}`, '', token)
      
      if (data.code == 200) {
          dispatch({type: CONTENT_DETAILS_FETCHED, payload: data});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
         dispatch({ type: ERROR })
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("getCategoryContents Error", message)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message })
    }
  }
}