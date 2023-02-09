import { actionTypes } from './action';

export const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

const rootReducer= (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light,
      });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    default:
      return state;
  }
};
export default rootReducer