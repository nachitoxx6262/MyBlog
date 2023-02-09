import { actionTypes } from './action';
import {data} from "./data"
export const initialState = {
  post: []
};

const rootReducer= (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST:
      return {
        ...state,
        post : data
      }
    default:
      return state;
  }
};
export default rootReducer