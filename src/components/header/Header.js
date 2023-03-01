import { defaultTitle } from "../../constants";
import { ExcelComponent } from "../../core/ExcelComponent";
import * as actions from "../../store/actions";
import { debounce } from "../../utils/debaunce";
import { $ } from "../../core/dom";
import { ActiveRoute } from "../../core/routes/ActiveRoute";

export class Header extends ExcelComponent {
  static className = "excel__header";

  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["input", "click"],
      subscribe: ["tableName"],
      ...options,
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
    <input id="table-name-input" type="text" class="input" value="${title}" />

    <div>
      <div class="button" data-button="delete">
        <span class="material-icons" data-button="delete"> delete </span>
      </div>
      <div class="button" data-button="exit">
        <span class="material-icons" data-button="exit"> exit_to_app </span>
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

  onClick(e) {
    const target = $(e.target);
    if (!target.data.button) return;

    if (target.data.button === "delete") {
      const desision = confirm("Are you sure you want to delete this table?");

      if (desision) {
        localStorage.removeItem("excel:" + ActiveRoute.param);
        ActiveRoute.navigate("dashboard");
      }
    }

    if (target.data.button === "exit") {
      ActiveRoute.navigate("dashboard");
    }
  }
}
