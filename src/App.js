import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter ,Switch, Route} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <BrowserRouter>
            <h1>Email: {loggedInUser.email}</h1>
          <Header/>
          <Switch>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/inventory" component={Inventory}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/shipment" component={Shipment}/>
            <Route exact path="/" component={Shop}/>
            <Route exact path="/product/:productKey" component={ProductDetail}/>
            <Route exact path="*" component={NotFound}/>
          </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

