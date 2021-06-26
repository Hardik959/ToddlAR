import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Alphabets from "./pages/Alphabets";
import Mathematics from "./pages/Mathematics";
import Animals from "./pages/Animals";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/alphabets'>
          <Alphabets />
        </Route>
        <Route path='/mathematics'>
          <Mathematics />
        </Route>
        <Route path='/animals'>
          <Animals />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
