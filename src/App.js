import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import HomePage from './ui/pages/homepage/homepage.component.jsx';
import ShopPage from './ui/pages/shop/shop.component.jsx';
import Header from './ui/ui-components/header/header.component.jsx';


	

function App() {
  return (
    <div>
		<Header/>
	    <Switch>
	      <Route exact={true} path='/' component={HomePage} />
	      <Route   path='/shop' component={ShopPage}/>
	    </Switch>
    </div>
  );
}

export default App;


  