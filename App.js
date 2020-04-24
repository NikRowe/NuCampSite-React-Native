import React from 'react';
import Main from './components/MainComponent'     
import ErrorBoundary from './components/ErrorBoundryComponent';

export default function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

