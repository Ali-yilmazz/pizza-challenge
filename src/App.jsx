import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./layout/Navbar";
import OrderResult from "./pages/OrderResult";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import ErrorPage from "./components/ErrorPage";



function App() {


  return (<>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/orderpizza" component={OrderPizza} />
      <Route path="/orderresult" component={OrderResult} />
      <Route path="*" component={ErrorPage} />
    </Switch>
    <Footer />
  </>
  );
}

export default App