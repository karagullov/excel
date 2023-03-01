import { defaultStyles, defaultTitle } from "../constants";
import { clone } from "../utils/clone";

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  title: defaultTitle,
  currentStyles: defaultStyles,
  currentText: "",
  openedDate: new Date().toJSON(),
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: "",
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
