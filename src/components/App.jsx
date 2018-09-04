import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import Header from "./Header";

const App = ({ store }) => (
    <Provider store={store}>
        <div>
            <Header/>
            <div className="view">Some todos should be here</div>
        </div>
    </Provider>
);

App.propTypes = {
    store : PropTypes.object.isRequired
}

export default App;
