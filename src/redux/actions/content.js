import { Alert } from "react-native"
import { getDownloadCount } from "../../helper/downloadFile"
import { getDataFromAsyncStorage } from "../../helper/utils"
import { getApi } from "../api"
import base_url from "../api/base_url"
import { CATEGORY_CONTENT_FETCHED, CATEGORY_FETCHED, CONTENT_DETAILS_FETCHED, DOWNLOAD_COUNT_FETCHED, ERROR, FETCHING, RECOMMENDED_CONTENT_FETCHED, SEARCHED_CONTENT_FETCHED, TRENDING_CONTENT_FETCHED } from "../constants"

export const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/category`, '', token.token)

      if (data.isSuccess) {
          dispatch({type: CATEGORY_FETCHED, payload: data.data});
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
        let { data } = await getApi(`${base_url}/content/category/${catId}?page=${page}&count=${count}`, '', token.token)
      
      if (data.isSuccess) {
          dispatch({type: CATEGORY_CONTENT_FETCHED, payload: data.data.list});
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
        let { data } = await getApi(`${base_url}/content/${contentId}`, '', token.token)
      
      if (data.isSuccess) {
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

export const getDownloadFilesCount = () => {
  return async (dispatch) => {
   try {
      const count = await getDownloadCount()
      dispatch({type: DOWNLOAD_COUNT_FETCHED, payload: count.length});
   } catch (error) {
      console.log("error getDownloadFilesCount", error)
   }
  };
}

export const getRecommendedContent = (count = 10) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/content/recommended?page=1&count=${count}`, '', token.token)
      if (data.isSuccess) {
          dispatch({type: RECOMMENDED_CONTENT_FETCHED, payload: data.data.list});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
         dispatch({ type: ERROR })
        return Promise.resolve({ status: false })
      }

    } catch (error) {
      console.log("getRecommendedContent Error", error)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message: error.message })
    }
  }
}

export const getTrendingContent = (count = 10) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/content/trendings?page=1&count=${count}`, '', token.token)
      
      if (data.isSuccess) {
          dispatch({type: TRENDING_CONTENT_FETCHED, payload: data.data.list});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
         dispatch({ type: ERROR })
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("getTrendingContent Error", message)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message })
    }
  }
}

export const searchContent = (searchKeyword) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING })
        let token = await getDataFromAsyncStorage('token')
        let { data } = await getApi(`${base_url}/content/search?keyword=${searchKeyword}`, '', token.token)
      
      if (data.isSuccess) {
          dispatch({type: SEARCHED_CONTENT_FETCHED, payload: data});
          return Promise.resolve({ status: true })
      } else {
        Alert.alert("error", data.message)
         dispatch({ type: ERROR })
        return Promise.resolve({ status: false })
      }

    } catch ({ message }) {
      console.log("searchContent Error", message)
      dispatch({ type: ERROR })
      return Promise.reject({ status: false, message })
    }
  }
}