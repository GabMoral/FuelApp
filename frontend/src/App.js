import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/Login/login";
import Register from "./components/Login/register";
import Profile from "./components/Profile/profile";
import Quote from "./components/Fuel/quote";
import History from "./components/Fuel/history";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/> 

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/quote" component={Quote} />
              <Route exact path="/history" component={History} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
