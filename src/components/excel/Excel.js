import { $ } from "../../core/dom/dom";
import { Emitter } from "../../core/dom/Emitter";
import { StoreSubscriber } from "../../core/store/StoreSubscriber";
import { updateOpenedDate } from "../../store/actions";
import { preventDefault } from "../../core/utils/preventDefault";

export class Excel {
  constructor(options) {
    this.components = options.components || [];
    this.store = options.store;
    this.emitter = new Emitter();
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create("div", "excel");

    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };

    this.components = this.components.map((Component) => {
      const $el = $.create("div", Component.className);
      const component = new Component($el, componentOptions);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  init() {
    if (process.env.NODE_ENV === "production") {
      document.addEventListener("contextmenu", preventDefault);
    }

    this.store.dispatch(updateOpenedDate());
    this.subscriber.subscribeComponents(this.components);
    this.components.forEach((component) => component.init());
  }

  destroy() {
    document.removeEventListener("contextmenu", preventDefault);
    this.subscriber.unsubscribeFromStore();
    this.components.forEach((component) => component.destroy());
  }
}
