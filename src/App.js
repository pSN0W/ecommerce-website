import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/home-page";
import ShopPage from "./pages/shop/shop";
import Header from "./component/header/header";
import SignIn from "./component/sign-in/signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
