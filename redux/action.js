import data from "./data"
export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
};
export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD });
};

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000,
  );
};