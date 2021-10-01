import { FETCHED, ERROR, FETCHING, CATEGORY_CONTENT_FETCHED, CATEGORY_FETCHED, CONTENT_DETAILS_FETCHED, DOWNLOAD_COUNT_FETCHED, RECOMMENDED_CONTENT_FETCHED, TRENDING_CONTENT_FETCHED, SEARCHED_CONTENT_FETCHED } from '../constants';

const initialState = {
  loading: false,
  categories: [],
  categoryContents: [],
  recommendedContent: [],
  trendingContent: [],
  searchContent: [],
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
    case RECOMMENDED_CONTENT_FETCHED:
      return {
        ...state,
        recommendedContent: action.payload
      }
    case TRENDING_CONTENT_FETCHED:
      return {
        ...state,
        trendingContent: action.payload
      }
    case SEARCHED_CONTENT_FETCHED:
      return {
        ...state,
        searchContent: action.payload
      }
    default:
      return state;
  }
};

export default content;
