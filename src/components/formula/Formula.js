import { $ } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "keydown"],
      ...options,
    });
    this.formulaText = "";
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();

    this.$folmula = this.$root.find("#formula");

    this.$on("table:select", (cell) => {
      this.$folmula.text(cell.text());
    });

    this.$on("table:input", (cell) => {
      this.$folmula.text(cell.text());
    });

    this.$subscribe((state) => {
      console.log("FormulaState", state);
    });
  }

  onInput(event) {
    this.$emit("formula:input", $(event.target).text());
  }

  onKeydown(event) {
    const keys = ["Enter", "Tab"];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit("formula:done", event);
    }
  }
}
