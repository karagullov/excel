import { defaultTitle } from "../../constants";
import { ExcelComponent } from "../../core/ExcelComponent";
import * as actions from "../../store/actions";
import { debounce } from "../../utils/debaunce";

export class Header extends ExcelComponent {
  static className = "excel__header";

  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["input"],
      subscribe: ["tableName"],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;

    return `
    <input id="table-name-input" type="text" class="input" value=${title} />

    <div>
      <div class="button">
        <span class="material-icons"> delete </span>
      </div>
      <div class="button">
        <span class="material-icons"> exit_to_app </span>
      </div>
    </div>
    `;
  }

  init() {
    super.init();
    this.$tableNameInput = this.$root.find("#table-name-input");
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
  }

  storeChanged({ tableName }) {
    this.$tableNameInput.text(tableName);
  }

  onInput(e) {
    this.$dispatch(actions.changeTitle(e.target.value));
  }
}
