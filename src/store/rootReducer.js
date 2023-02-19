import { TABLE_RESIZE } from "./types";

export function rootReducer(state, action) {
  let prevState;
  let field;
  console.log(action);
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === "col" ? "colState" : "rowState";
      prevState = state[field] || {};
      prevState[action.data.id] = action.data.size;
      return { ...state, [field]: prevState }; //id, value
    default:
      return state;
  }
}
