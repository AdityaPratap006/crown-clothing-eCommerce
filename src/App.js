import React from 'react';
import { Switch,Route,Link } from 'react-router-dom';

import './App.css';
import HomePage from './ui/pages/homepage/homepage.component.jsx';

const HatsPage = (props) => {
	console.log(props)
	return (	<div>
					<button onClick={()=>props.history.push('/')}><h1>HATS PAGE!</h1></button>
				</div>
	)
}
	

function App() {
  return (
    <div>
	    <Switch>
	      <Route exact={true} path='/' component={HomePage} />
	      <Route exact  path='/shop/hats' component={HatsPage}/>
	    </Switch>
    </div>
  );
}

export default App;
