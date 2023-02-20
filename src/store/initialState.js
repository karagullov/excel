import { defaultStyles } from "../constants";
import { storage } from "../utils/storage";

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: "",
  currentStyles: defaultStyles,
};

export const initialState = storage("excel-state") ?? defaultState;
