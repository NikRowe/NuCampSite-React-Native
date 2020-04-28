import React from 'react';
import Main from './components/MainComponent'     
import ErrorBoundary from './components/ErrorBoundryComponent';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...'])
console.disableYellowBox = true

export default function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

