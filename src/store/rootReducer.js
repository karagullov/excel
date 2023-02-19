import { CHANGE_TEXT, TABLE_RESIZE } from "./types";

export function rootReducer(state, action) {
  let prevState;
  let field;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === "col" ? "colState" : "rowState";
      prevState = state[field] || {};
      prevState[action.data.id] = action.data.size;
      return { ...state, [field]: prevState };
    case CHANGE_TEXT:
      prevState = state["dataState"] || {};
      prevState[action.data.id] = action.data.text;
      return { ...state, currentText: action.data.text, dataState: prevState };
    default:
      return state;
  }
}
