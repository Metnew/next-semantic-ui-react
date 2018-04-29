import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import serialize from 'serialize-javascript'
import { ServerStyleSheet } from 'styled-components'

export default class DefaultDocument extends Document {
	static getInitialProps ({renderPage}) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return {...page, styleTags}
	}
	render () {
		const env = {BROWSER: true}

		return (
			<html lang={this.props.__NEXT_DATA__.props.lang || 'en'}>
				<Head>
					<link rel="stylesheet" href="/_next/static/style.css" />
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<script dangerouslySetInnerHTML={{__html: '__ENV__ = ' + serialize(env)}} />
					<NextScript />
				</body>
			</html>
		)
	}
}
