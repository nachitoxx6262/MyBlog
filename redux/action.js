import data from "./data"
export const actionTypes = {
  POST: 'POST',
};
export const addPost = () => {
  return { type: actionTypes.POST};
};