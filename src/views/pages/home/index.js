import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { appActions, getIdentity } from '@core/app'
import Tracklist from '@components/tracklist'

export class HomePage extends React.Component {
  componentWillMount() {
    this.initApp()
  }

  initApp() {
    this.props.initApp()
  }

  render() {
    const { identity } = this.props

    return (
      <section>
	<h5>Identity - {identity}</h5>
	<Tracklist />
      </section>
    )
  }
}

const mapStateToProps = createSelector(
  getIdentity,
  identity => ({identity})
)

const mapDispatchToProps = {
  initApp: appActions.initApp
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
