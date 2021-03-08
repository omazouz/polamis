import React, { useReducer, useContext, createContext } from 'react'

const AppContext = createContext(null)
const AppDispatchContext = createContext(undefined)

function userReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				user: action.payload,
			}

		default:
			return state
	}
}

const ContextProvider = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user') || '{}')
	const initialState = { user }
	const [state, dispatch] = useReducer(userReducer, initialState)

	return (
		<AppContext.Provider value={state}>
			<AppDispatchContext.Provider value={dispatch}>
				{children}
			</AppDispatchContext.Provider>
		</AppContext.Provider>
	)
}
function useContextState() {
	const context = useContext(AppContext)
	if (context === null) {
		throw new Error('ContextProvider is not accessible')
	}

	return context
}

function useContextDispatch() {
	const context = useContext(AppDispatchContext)
	if (context === undefined) {
		throw new Error('ContextProvider is not accessible')
	}

	return context
}

export { ContextProvider, useContextState, useContextDispatch }
