import React, { Suspense } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Spin } from "antd";

import { Provider } from "./store";
import { routes } from "./router";
import { MainLayout } from "./layout/Main";
import "./App.less";

function App() {
  return (
    <Provider>
      <Router>
        <MainLayout className="container">
          {routes.map(({ path, exact, Component }) => {
            return (
              <Route key={path} exact={!!exact} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match !== null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                    onExited={(node) => {
                      // console.log(node)
                    }}
                  >
                    <div className="page">
                      <Suspense fallback={<Spin spinning={true}>Loading...</Spin>}>
                        <Component />
                      </Suspense>
                    </div>
                  </CSSTransition>
                )}
              </Route>
            );
          })}
        </MainLayout>
      </Router>
    </Provider>
  );
}

export default App;
