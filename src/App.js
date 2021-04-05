import React from "react";
import Heading from "./Components/heading";
import Register from "./Components/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Heading />
      <Route path="/register" component={Register}></Route>
    </Router>
  );
}

export default App;
