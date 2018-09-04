import React from 'react';
import { Provider } from 'react-redux';

import Header from './Header.jsx';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <div className="view">Some todos should be here</div>
      </div>
    </Provider>
  );
};

export default App;
