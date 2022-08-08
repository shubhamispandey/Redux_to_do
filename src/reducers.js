let initialState = [];
let lastId = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: ++lastId, name: action.payload.name }];
    default:
      return state;
  }
};
export default reducer;
