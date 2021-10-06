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
        categories: action.payload,
        loading: false,
      }
    case CATEGORY_CONTENT_FETCHED: 
      return {
        ...state,
        categoryContents: action.payload,
        loading: false,
      }
    case CONTENT_DETAILS_FETCHED: 
      return {
        ...state,
        contenDetails: action.payload,
        loading: false,
      }
    case DOWNLOAD_COUNT_FETCHED:
      return {
        ...state,
        downloadCount: action.payload,
        loading: false,
      }
    case RECOMMENDED_CONTENT_FETCHED:
      return {
        ...state,
        recommendedContent: action.payload,
        loading: false,
      }
    case TRENDING_CONTENT_FETCHED:
      return {
        ...state,
        trendingContent: action.payload,
        loading: false,
      }
    case SEARCHED_CONTENT_FETCHED:
      return {
        ...state,
        searchContent: action.payload,
        loading: false,
      }
    default:
      return state;
  }
};

export default content;
