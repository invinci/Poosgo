import React, { Component } from 'react';


import configureStore from './store/configureStore';

import { Provider } from 'react-redux';
//import Test from './Test'

import Routes from './Routes'

const store = configureStore();

const App = () => (
<Provider store={store}>
    <Routes/>
</Provider>
);

export default App;
