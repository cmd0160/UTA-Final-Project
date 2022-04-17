import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Directions from "./components/Directions";

import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import Course from "./pages/Course";
import Events from "./pages/Events";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/amenities" component={Amenities} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
