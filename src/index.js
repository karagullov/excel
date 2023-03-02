import "./scss/index.scss";
import { Router } from "./core/routes/Router";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { ExcelPage } from "./pages/excel/ExcelPage";

new Router("#app", {
  pages: [
    { page: DashboardPage, path: "dashboard" },
    { page: ExcelPage, path: "excel" },
  ],
});
