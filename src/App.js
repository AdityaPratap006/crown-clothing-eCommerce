import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './ui/pages/homepage/homepage.component.jsx';
import ShopPage from './ui/pages/shop/shop.component.jsx';
import Header from './ui/ui-components/header/header.component.jsx';
import SignInAndSignUpPage from './ui/pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

class  App extends React.Component {

	//Contructor not needed anymore (using Redux now)
	/*constructor(){
		super();

		this.state = {
			currentUser : null,
		}
	}*/

	unsubscribeFromAuth = null

	componentDidMount() {

		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			 
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {

					setCurrentUser({
							id:snapShot.id,
							...snapShot.data()
						
					});

				} );

				
			}
			else{
				setCurrentUser(userAuth);
			}

			
			  
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	
	

	render(){
		return (
			<div>
				<Header />
				<Switch>
					<Route exact={true} path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage}/>
					<Route exact  path='/signin' render ={ () => this.props.currentUser? 
					(<Redirect to='/'/>)
					:(<SignInAndSignUpPage/>)
				}/>
				</Switch>
			</div>
		  );
	}
  
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({

	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


  