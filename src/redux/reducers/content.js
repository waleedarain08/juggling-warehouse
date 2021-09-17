import { FETCHED, ERROR, FETCHING } from '../constants';

const initialState = {
  loading: false,
  categories: [],
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
    default:
      return state;
  }
};

export default content;
