import { Navigate } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("@/views/home"));
const Dashboard=lazy(()=>import("@/views/dashboard"))
const EchartsBar = lazy(() => import("@/views/echarts/bar"));
const EchartsLine = lazy(() => import("@/views/echarts/line"));
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
