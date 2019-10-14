import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/footer';

export default function Routes() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>

        <Footer />
      </>
    </BrowserRouter>
  );
}
