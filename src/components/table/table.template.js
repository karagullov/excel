const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

function getWidth(state, index) {
  return (state[index] ?? DEFAULT_WIDTH) + "px";
}

function getHeight(state, index) {
  return (state[index] ?? DEFAULT_HEIGHT) + "px";
}

function toCell(state, row) {
  return function (_, col) {
    const id = `${row}:${col}`;
    return `
      <div class="cell" contenteditable 
        data-col=${col} 
        data-type="cell"
        data-id=${id}
        style="width: ${getWidth(state.colState, col)}">
        ${state.dataState[id] ?? ""}
      </div>
    `;
  };
}

function toColumn({ col, index, width }) {
  return `
    <div 
    class="column" 
    data-type="resizable" 
    data-col=${index} 
    style="width: ${width}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
    `;
}

function createRow(index, content, state) {
  const resize = index
    ? `<div class="row-resize" data-resize="row"></div>`
    : "";
  return `
    <div 
    class="row" 
    data-type="resizable" 
    data-row="${index}"
    style="height: ${getHeight(state, index)}"
    >
      <div class="row-info">
        ${index || ""}
        ${resize}
      </div>
      <div class="row-data">
        ${content}
      </div>
    </div>
    `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function withWidthFrom(state) {
  return function (col, index) {
    return {
      col,
      index,
      width: getWidth(state, index),
    };
  };
}

export function createTable(rowsCount = 15, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(withWidthFrom(state.colState))
    .map(toColumn)
    .join("");

  rows.push(createRow(null, cols, {}));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill("")
      .map(toCell(state, row))
      .join("");

    rows.push(createRow(row + 1, cells, state.rowState));
  }

  return rows.join("");
}
