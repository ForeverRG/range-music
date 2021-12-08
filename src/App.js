import { renderRoutes } from "react-router-config";

import routes from "./router";

import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import RangeAppHeader from "@/components/app-header";

function App() {
  return (
    <HashRouter>
      <RangeAppHeader />
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </HashRouter>
  );
}

export default App;
