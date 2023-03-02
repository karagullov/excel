import { Router } from "./Router";
import { Page } from "./Page";

class DashboardPage extends Page {
  getRoot() {
    const root = document.createElement("div");
    root.innerHTML = "dashboard";
    return root;
  }
}

describe("Router", () => {
  let router;
  let $root;

  beforeEach(() => {
    $root = document.createElement("div");

    router = new Router($root, {
      pages: [{ page: DashboardPage, path: "dashboard" }],
    });
  });

  test("should be defined", () => {
    expect(router).toBeDefined();
  });

  test("should render dashboard page", () => {
    router.changePageHandler();
    expect($root.innerHTML).toBe("<div>dashboard</div>");
  });
});
