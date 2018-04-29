// @flow
import Page from 'components/Page'
import React from 'react'
import { connect } from 'react-redux'
import { Container, Message } from 'semantic-ui-react'

import README from '../README.md'

type Props = {
	reduxWorks: boolean
}

const Dashboard = ({reduxWorks}: Props) => {
	return (
		<Container>
			{reduxWorks && <Message success>Redux works!</Message>}
			<README />
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		reduxWorks: state.reduxWorks.really
	}
}

export default Page(connect(mapStateToProps)(Dashboard))
