import routes from "@/router";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import LoadingComp from "./conponents/Loading";
function App() {
  const outlet = useRoutes(routes);
  return <Suspense fallback={<LoadingComp></LoadingComp>}>{outlet}</Suspense>;
}

export default App;
