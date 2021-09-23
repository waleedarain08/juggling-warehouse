import { FETCHED, ERROR, FETCHING, CATEGORY_CONTENT_FETCHED, CATEGORY_FETCHED, CONTENT_DETAILS_FETCHED, DOWNLOAD_COUNT_FETCHED } from '../constants';

const initialState = {
  loading: false,
  categories: [],
  categoryContents: [],
  contenDetails: null,
  downloadCount: 0
};

const content = (state = initialState, action) => {
  switch (action.type) {
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
    case CATEGORY_FETCHED: 
      return {
        ...state,
        categories: action.payload
      }
    case CATEGORY_CONTENT_FETCHED: 
      return {
        ...state,
        categoryContents: action.payload
      }
    case CONTENT_DETAILS_FETCHED: 
      return {
        ...state,
        contenDetails: action.payload
      }
    case DOWNLOAD_COUNT_FETCHED:
      return {
        ...state,
        downloadCount: action.payload
      }
    default:
      return state;
  }
};

export default content;
