import { Excel } from "./components/excel/Excel";
import { Formula } from "./components/formula/Formula";
import { Header } from "./components/header/Header";
import { Table } from "./components/table/Table";
import { Toolbar } from "./components/toolbar/Toolbar";
import { createStore } from "./core/createStore";
import "./scss/index.scss";
import { rootReducer } from "./store/rootReducer";

const store = createStore(rootReducer);

const excel = new Excel("#app", {
  components: [Header, Toolbar, Formula, Table],
  store,
});

excel.render();
