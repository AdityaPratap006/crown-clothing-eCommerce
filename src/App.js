import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import HomePage from './ui/pages/homepage/homepage.component.jsx';
import ShopPage from './ui/pages/shop/shop.component.jsx';
import Header from './ui/ui-components/header/header.component.jsx';
import SignInAndSignUpPage from './ui/pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
 

class  App extends React.Component {

	constructor(){
		super();

		this.state = {
			currentUser : null,
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			 
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id:snapShot.id,
							...snapShot.data()
						}
					});

				} );

				
			}
			else{
				this.setState({ currentUser: userAuth});
			}

			
			  
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	

	render(){
		return (
			<div>
				<Header currentUser = {this.state.currentUser}/>
				<Switch>
					<Route exact={true} path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage}/>
					<Route path='/signin' component={SignInAndSignUpPage}/>
				</Switch>
			</div>
		  );
	}
  
}

export default App;


  