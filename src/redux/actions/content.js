import { getDataFromAsyncStorage } from "../../helper/utils"
import { getApi } from "../api"
import base_url from "../api/base_url"
import { CATEGORY_FETCHED, ERROR, FETCHING } from "../constants"



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