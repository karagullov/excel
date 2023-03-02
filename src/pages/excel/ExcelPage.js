import { Excel } from "../../components/excel/Excel";
import { Formula } from "../../components/formula/Formula";
import { Header } from "../../components/header/Header";
import { Table } from "../../components/table/Table";
import { Toolbar } from "../../components/toolbar/Toolbar";
import { createStore } from "../../core/store/createStore";
import { normalizeInitialState } from "../../store/initialState";
import { rootReducer } from "../../store/rootReducer";
import { Page } from "../../core/page/Page";
import { StateProcessor } from "../../core/page/StateProcessor";
import { LocalStorageClient } from "../../shared/LocalStorageClient";

export class ExcelPage extends Page {
  constructor(param) {
    super(param);

    this.storeSub = null;
    this.processor = new StateProcessor(
      new LocalStorageClient(this.params || Date.now().toString())
    );
  }

  async getRoot() {
    const state = await this.processor.get();
    const store = createStore(rootReducer, normalizeInitialState(state));

    this.storeSub = store.subscribe(this.processor.listen);

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
    this.storeSub.unsubscribe();
  }
}
