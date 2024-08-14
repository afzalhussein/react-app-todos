import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading the river information.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
