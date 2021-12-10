import { renderRoutes } from "react-router-config";

import routes from "./router";
import store from "./store";

import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RangeAppHeader from "@/components/app-header";
import RangeAppFooter from "@/components/app-footer";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RangeAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <RangeAppFooter />
      </HashRouter>
    </Provider>
  );
}

export default App;
