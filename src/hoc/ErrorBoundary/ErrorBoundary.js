import { Component } from 'react';

import ErrorComponent from '../../components/UI/ErrorComponet/ErrorComponent';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) {
      return <ErrorComponent hasError={this.state.hasError} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
