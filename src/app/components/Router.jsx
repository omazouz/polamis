import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import SignUp from './signIn/SignUp'
import Message from './signIn/Message'
import Accueil from './signIn/Accueil'
import { ContextProvider } from './context/AppContext'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={SignIn} />

					<Route exact path="/signup" component={SignUp} />
					<ProtectedRoute exact path="/sent" component={Accueil} />
					<ProtectedRoute exact path="/received" component={Accueil} />
					<ProtectedRoute exact path="/sent/:id" component={Accueil} />
					<ProtectedRoute exact path="/received/:id" component={Accueil} />
					<Route exact path="/test" component={Accueil} />
				</Switch>
			</BrowserRouter>
		</ContextProvider>
	)
}

export default Router
