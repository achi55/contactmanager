import React, { Component } from "react";
//import logo from "./logo.svg";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import About from "./components/Pages/About";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/Pages/NotFound";
import Test from "./components/Test/Test";
//exact path="/about/:id" component={About}
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header Branding="Contact Manager" />
            <div className="container" style={{ textAlign: "left" }}>
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Test" component={Test} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
