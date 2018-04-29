// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Root reducer
const rootReducer = combineReducers({
	reduxWorks: () => ({
		really: true
	})
})

// Application
/**
 * Configure application store
 * @param  {Object} initialState - preloadedState
 * @return {Object} - configured store
 */
const configureStore = (initialState: Object) => {
	const middlewares = [thunk]
	const enhancers = middlewares.map(a => applyMiddleware(a))
	const composedEnhancers = composeWithDevTools.apply(null, enhancers)
	return createStore(rootReducer, initialState, composedEnhancers)
}

export default configureStore
