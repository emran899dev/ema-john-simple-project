import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';
import PriavateRouter from './components/PrivateRouter/PriavateRouter';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {/* <BrowserRouter>
            <h1>Email: {loggedInUser.email}</h1>
          <Header/>
          <Switch>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/review" component={Review}/>
            <PriavateRouter exact path="/inventory" component={Inventory}/>
            <Route exact path="/login" component={Login}/>
            <PriavateRouter exact path="/shipment" component={Shipment}/>
            <Route exact path="/" component={Shop}/>
            <Route exact path="/product/:productKey" component={ProductDetail}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
      </BrowserRouter> */}

<h1>Email: {loggedInUser.email}</h1>
      <Router>
      <Header></Header>
        <Switch>
          <Route  path="/shop" >
            <Shop></Shop>
          </Route >
          <Route path="/review">
            <Review></Review>
          </Route>
          <PriavateRouter path="/inventory">
            <Inventory></Inventory>
          </PriavateRouter>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PriavateRouter path="/shipment">
            <Shipment></Shipment>
          </PriavateRouter>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router> 
    </UserContext.Provider>
  );
}

export default App;

