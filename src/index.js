//Dependencies
import Landing from "./components/landing/Lading";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
// import { store, persistor } from "./redux/store/index.js";
import store from "./redux/store/index.js";
import { Router } from "react-router-dom";
import App from "./components/App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureFakeBackend } from "./redux/helpers/fake-backend";
import { history } from "./redux/helpers/history";
import { clearLocalStorage } from "./redux/store/localStorage";

//Routes
import AppRoutes from "./routes";

//Assets
// import './styles/index.css';
import registerServiceWorker from "./registerServiceWorker";


clearLocalStorage();

// configureFakeBackend();

render(
  <Router history={history}>
    <Provider store={store}>
      {/* <PersistGate loading={<Landing />} persistor={persistor}> */}
      <AppRoutes />
      {/* </PersistGate> */}
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
