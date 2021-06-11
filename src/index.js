import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
