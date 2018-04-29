/**
 * @flow
 */
import 'babel-polyfill'
import 'isomorphic-fetch'
import 'semantic-ui-css/semantic.css'

import React, { Component } from 'react'

import { PageLayout } from './style'

type Props = {
	children: React$Node
}

class App extends Component<Props> {
	render () {
		const {children} = this.props

		return <PageLayout>{children}</PageLayout>
	}
}

export default App
