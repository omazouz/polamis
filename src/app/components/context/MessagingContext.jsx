import React, { createContext, useReducer } from 'react'

const initialState = { count: 0 }
export const MessagingContext = createContext(initialState)

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + 1 }
		case 'decrement':
			return { ...state, count: state.count - 1 }
		default:
			return state
	}
}
const MessagingProvider = ({ children }) => {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<MessagingContext.Provider value={{ count, dispatch }}>
			{children}
		</MessagingContext.Provider>
	)
}
export default MessagingProvider
