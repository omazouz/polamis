import React, { useEffect } from 'react'
import {
	Route,
	Redirect,
	RouteComponentProps,
	RouteProps,
	useLocation,
} from 'react-router-dom'
import decode from 'jwt-decode'
import { useContextState, useContextDispatch } from './context/AppContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { user } = useContextState()
	const setContext = useContextDispatch()
	const location = useLocation()
	const isAuthenticated = () => {
		if (!user || !user.token) {
			return false
		}

		try {
			const { exp } = decode(user.token)
			if (exp < new Date().getTime() / 1000) {
				return false
			}
		} catch {
			return false
		}

		return true
	}

	if (!isAuthenticated()) {
		return (
			<Redirect
				to={{
					pathname: '/',
					state: {
						from: location.pathname,
					},
				}}
			/>
		)
	}
	return (
		<Route
			{...rest}
			render={(props) => {
				return <Component {...rest} {...props} />
			}}
		/>
	)
}

export default ProtectedRoute
