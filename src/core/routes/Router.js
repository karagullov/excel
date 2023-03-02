import { Loader } from "../../components/common/loader";
import { $ } from "../dom/dom";
import { ActiveRoute } from "./ActiveRoute";

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error("Selector is not provided in Router");
    }

    if (!routes.pages.length) {
      throw new Error("Pages is not provided in Router");
    }

    this.loader = new Loader();

    this.$placeholder = $(selector);
    this.routes = routes;
    this.page = null;

    this.changePageHandler = this.changePageHandler.bind(this);
    this.init();
  }

  init() {
    window.addEventListener("hashchange", this.changePageHandler);
    this.changePageHandler();
  }

  async changePageHandler() {
    if (this.page) {
      this.page.destroy();
    }
    this.$placeholder.clear().append(this.loader);

    let Page = null;

    this.routes.pages.forEach((el) => {
      if (ActiveRoute.path.includes(el.path)) {
        Page = el.page;
      }
    });

    if (!Page) {
      Page = this.routes.pages[0].page;
      window.location.hash = `#${this.routes.pages[0].path}`;
    }

    this.page = new Page(ActiveRoute.param);
    const root = await this.page.getRoot();
    this.$placeholder.clear().append(root);
    this.page.afterRender();
  }

  destroy() {
    window.removeEventListener("hashchange", this.changePageHandler);
  }
}
