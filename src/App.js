import React from 'react';
import { Provider } from 'react-redux';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//cmpnts
import Header from './components/Header.js'
import { store } from './reducers/quotesReducer.jsx'

function App() {
  return (
    <Provider id='quote-box' store={store}>
      <Header />
    </Provider>
  );
}

export default App;
