import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Header from "./Header.jsx";
import Home from "./Home.jsx";

const App = ({ store }) => (
    <Provider store={store}>
        <div className="app">
            <Header/>
            <Home/>
        </div>
    </Provider>
);

App.propTypes = {
    store : PropTypes.object.isRequired
}

export default App;
