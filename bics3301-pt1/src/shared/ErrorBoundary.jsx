// ErrorBoundary: if one question's page crashes (for example a missing import),
// show the error message for that page only, instead of a blank screen for the whole app.
// Provided for you. You do not need to change this file.
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  // React calls this when a component below throws an error while rendering.
  static getDerivedStateFromError(error) {
    return { error }
  }

  // When you move to another page, clear the old error.
  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null })
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-box" role="alert">
          <p><strong>This page has an error:</strong> {this.state.error.message}</p>
          <p className="muted">Fix it in VS Code and save. The other questions still work.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
