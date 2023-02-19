export function rootReducer(state, action) {
  let prevColState;
  switch (action.type) {
    case "TABLE_RESIZE":
      prevColState = state.colState || {};
      prevColState[action.data.id] = action.data.size;
      return { ...state, colState: prevColState }; //id, value
    default:
      return state;
  }
}
