import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Main from './components/MainComponent';

const store = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
    <Main />
    </Provider>
  );
}
