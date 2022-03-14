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

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

render() {
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
            <p>{this.state.apiResponse}</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
