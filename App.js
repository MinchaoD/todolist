import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import { StyleSheet} from 'react-native';
import Main from './components/MainComponent';

const store = ConfigureStore()

export default function App() {
  return (
    <Provider store={store}>
    <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
