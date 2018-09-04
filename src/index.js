import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import "./css/app.scss";
import "./css/header.scss";
import App from "./components/App.jsx";
import store from "./store";

ReactDOM.render(
    <App store={store} />,
    document.getElementById("app"),
);
