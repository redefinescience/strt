export default (state = {}, action) => {
  if (action.type === "SET_USER") {
    return {
      ...action.user,
    };
  }

  return state;
};
