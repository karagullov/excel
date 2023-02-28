import { Excel } from "../../components/excel/Excel";
import { Formula } from "../../components/formula/Formula";
import { Header } from "../../components/header/Header";
import { Table } from "../../components/table/Table";
import { Toolbar } from "../../components/toolbar/Toolbar";
import { createStore } from "../../core/createStore";
import { normalizeInitialState } from "../../store/initialState";
import { rootReducer } from "../../store/rootReducer";
import { storage } from "../../utils/storage";
import { debounce } from "../../utils/debaunce";
import { Page } from "../../core/Page";

function storageName(param) {
  return "excel" + param;
}

export class ExcelPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString();

    const state = storage(storageName(params), state);
    const store = createStore(rootReducer, normalizeInitialState(state));

    const stateListener = debounce((state) => {
      storage(storageName(params), state);
    }, 300);

    store.subscribe(stateListener);

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    });

    return this.excel.getRoot();
  }

  afterRender() {
    this.excel.init();
  }

  destroy() {
    this.excel.destroy();
  }
}
