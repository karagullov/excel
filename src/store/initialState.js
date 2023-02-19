  import { storage } from "../utils/storage";

  const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    currentText: "",
  };

  export const initialState = storage("excel-state") ?? defaultState;
