import React from 'react';
import Main from './components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// import ErrorBoundary from './components/ErrorBoundryComponent';
import { YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react'
import Loading from './components/LoadingComponent'

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true

const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    // <ErrorBoundary>
    <Provider store={store}>
      <PersistGate
      loading={<Loading />}
      persistor={persistor}
      >
        <Main />
      </PersistGate>
    </Provider>
    // </ErrorBoundary>
  );
}

