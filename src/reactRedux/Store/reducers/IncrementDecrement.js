const initialState = 1;
const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + parseInt(state.payload);
    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export default changeNumber;
