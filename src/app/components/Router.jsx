import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import SignUp from './signIn/SignUp'
import Accueil from './signIn/Accueil'

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={SignIn} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/accueil" component={Accueil} />
			</Switch>
		</BrowserRouter>
	)
}

export default Router
