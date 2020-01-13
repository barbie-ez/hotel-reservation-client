import React from "react";
import Home from "./components/Home";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import SignUp from "./components/SignUp";

const store = createStore((state = {}) => state, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signUp" exact component={SignUp} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
