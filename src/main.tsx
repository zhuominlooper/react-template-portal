import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//引入全局的默认样式
import "reset-css";
//引入UI框架样式

//引入自定义全局样式
import "@/assets/global.scss";
import App from "./App.tsx";
//redux的store
// import store from "./views/redux/redux/store.ts";

//react-redux的store
import store from "@/views/redux/react-redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
