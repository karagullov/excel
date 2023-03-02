import { camelToDashCase } from "./camelToDashCase";
export function toInlineStyles(styles = {}) {
  return Object.keys(styles)
    .map((key) => `${camelToDashCase(key)}:${styles[key]}`)
    .join(";");
}
