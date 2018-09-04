import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Header from "./Header";
import Home from "./Home";

const App = ({ store }) => (
    <Provider store={store}>
        <div className="app">
            <Header />
            <Home />
        </div>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
