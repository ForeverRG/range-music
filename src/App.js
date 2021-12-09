import { renderRoutes } from "react-router-config";

import routes from "./router";

import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import RangeAppHeader from "@/components/app-header";
import RangeAppFooter from "@/components/app-footer";

function App() {
  return (
    <HashRouter>
      <RangeAppHeader />
      <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <RangeAppFooter />
    </HashRouter>
  );
}

export default App;
