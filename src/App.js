import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";

export default class extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Suspense fallback={<h2>Loading...</h2>}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  name={route.name}
                />
              ))}
            </Suspense>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
