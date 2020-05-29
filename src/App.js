import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Info from './pages/profile/Info'
import Setting from './pages/profile/Setting'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/info">
          <Info />{" "}
        </Route>
        <Route path="/profile/setting">
          <Setting />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
