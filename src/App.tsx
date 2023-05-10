import routes from "@/router";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
function App() {
  const outlet = useRoutes(routes);
  return <Suspense fallback={<></>}>{outlet}</Suspense>;
}

export default App;
