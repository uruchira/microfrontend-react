import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginContent from "auth/LoginContent";
import DashboardContent from "dashboard/DashboardContent";

export default function Layout() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginContent} />
        <Route path="/login" component={LoginContent} />
        <Route path="/dashboard" component={DashboardContent} />
      </Switch>
    </Router>
  );
}
