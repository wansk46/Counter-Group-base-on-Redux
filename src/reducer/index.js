const initialState = { 
  sum: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
      case "UPDATESUM":
          console.log(payload)
          return { sum: state.sum + payload };
      default:
          return state;
  }
};
