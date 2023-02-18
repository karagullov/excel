import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.emitter = options.emitter;
    this.unsubcribers = [];
    this.prepare();
  }

  //Настраиваем наш компонент до init
  prepare() {}

  toHTML() {
    return "";
  }

  //Увеомляем слушателей про событие event
  $emit(eventName, ...args) {
    this.emitter.emit(eventName, ...args);
  }

  //Подписываемся на событие event
  $on(eventName, fn) {
    const unsub = this.emitter.subscribe(eventName, fn);
    this.unsubcribers.push(unsub);
  }

  //Инициализируем компонент
  //Добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }

  //Удалякм компонент
  //Чистим слушатели
  destroy() {
    this.removeDOMListeners();
    this.unsubcribers.forEach((unsub) => unsub());
  }
}
