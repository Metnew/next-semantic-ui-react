import 'styles/global'

import App from 'components/App'
import DefaultHead from 'components/DefaultHead'
import React from 'react'
import { Provider } from 'react-redux'
import createStore from 'store'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

const page = Page => {
	let store = createStore()
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../store', () => {
			const nextRootReducer = require('../store').default
			store.replaceReducer(nextRootReducer)
		})
	}

	return class PageWrapper extends React.Component {
		render () {
			return (
				<Provider store={store} key={Date.now()}>
					<ThemeProvider theme={theme}>
						<App>
							<DefaultHead />
							<Page />
						</App>
					</ThemeProvider>
				</Provider>
			)
		}
	}
}
export default page
