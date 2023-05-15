import { Navigate } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("@/views/home"));
const Dashboard = lazy(() => import("@/views/dashboard"));
const EchartsBar = lazy(() => import("@/views/echarts/bar"));
const EchartsLine = lazy(() => import("@/views/echarts/line"));
const ReduxComp = lazy(() => import("@/views/redux/redux"));
const ReactReduxComp = lazy(() => import("@/views/redux/react-redux"));
const MboxComp = lazy(() => import("@/views/mobx"));
const MboxModuleComp = lazy(() => import("@/views/mobx-module"));
const HookContext = lazy(() => import("@/views/context/hook"));
const ClassContext = lazy(() => import("@/views/context/class"));
const UseReducerComp = lazy(() => import("@/views/redux/use-reducer"));
const CusHooksComp = lazy(() => import("@/views/custom-hooks"));
const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/custom-hook",
        element: <CusHooksComp></CusHooksComp>,
      },
      {
        path: "/redux",
        element: <ReduxComp></ReduxComp>,
      },
      {
        path: "/hook-context",
        element: <HookContext></HookContext>,
      },
      {
        path: "/class-context",
        element: <ClassContext></ClassContext>,
      },
      {
        path: "/react-redux",
        element: <ReactReduxComp></ReactReduxComp>,
      },
      {
        path: "/use-reducer",
        element: <UseReducerComp></UseReducerComp>,
      },
      {
        path: "/mobx",
        element: <MboxComp></MboxComp>,
      },
      {
        path: "/mobx-module",
        element: <MboxModuleComp></MboxModuleComp>,
      },
      {
        path: "/echarts/bar",
        element: <EchartsBar></EchartsBar>,
      },
      {
        path: "/echarts/line",
        element: <EchartsLine></EchartsLine>,
      },
    ],
  },
];
export default routes;
