import React from 'react';
import Main from './components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// import ErrorBoundary from './components/ErrorBoundryComponent';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true

const store = ConfigureStore();

export default function App() {
  return (
    // <ErrorBoundary>
      <Provider store={store}>
        <Main />
      </Provider>
    // </ErrorBoundary>
  );
}

