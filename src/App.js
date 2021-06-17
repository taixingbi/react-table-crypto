import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import table from './app/table';
import purchase from './app/purchase';

import update from './app/update';
import test from './app/test';


function App() {
  return (

    <div >
      <div>
        <Router>
            <Switch>
              <Route path="/update/:id/" component={update} />
              <Route path="/purchase/" component={purchase} />

              <Route path="/test/" component={test} />

              <Route path="/" component={table} />

            </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;