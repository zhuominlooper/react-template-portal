import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//引入全局的默认样式
import "reset-css";
//引入UI框架样式

//引入自定义全局样式
import "@/assets/global.scss";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
