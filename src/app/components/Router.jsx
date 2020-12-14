import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import SignUp from './signIn/SignUp'
import Message from './signIn/Message'
import Accueil from './signIn/Accueil'
import MessagingProvider from './context/MessagingContext'

const Router = () => {
	return (
		<MessagingProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={SignIn} />

					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/sent" component={Accueil} />
					<Route exact path="/received" component={Accueil} />
					<Route exact path="/sent/:id" component={Accueil} />
					<Route exact path="/received/:id" component={Accueil} />
					<Route exact path="/test" component={Accueil} />
				</Switch>
			</BrowserRouter>
		</MessagingProvider>
	)
}

export default Router
