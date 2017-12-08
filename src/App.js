import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";

const App = () =>
<Router>
<div>
<Nav />
<Switch>
<Route exact path="/" component={Portfolio} />
<Route exact path="/search" component={Portfolio} />
</Switch>
</div>
</Router>;

export default App;
