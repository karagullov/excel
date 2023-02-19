import { TABLE_RESIZE } from "./types";

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data,
  };
}
