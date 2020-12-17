import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:mode(products|cart)" component={HomePage} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
