import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
const Login = React.lazy(() => import('./views/Authentication/login'));
const Register = React.lazy(() => import('./views/Authentication/register'));

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={props => <Login {...props} />}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={props => <Register {...props} />}
              />
              <Route
                path="/"
                name="Home"
                render={props => <DefaultLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
          <ToastContainer autoClose={5000} />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
