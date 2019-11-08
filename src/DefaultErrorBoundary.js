import React from 'react'
import PropTypes from 'prop-types'

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  }

  static getDerivedStateFromError(error) {
    return { isError: true, e: error }
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { isError, e } = this.state
    const { children } = this.props
    return isError ? (
      <div>Something went wrong! {e.message} </div>
    ) : (
      <div>{children}</div>
    )
  }
}
