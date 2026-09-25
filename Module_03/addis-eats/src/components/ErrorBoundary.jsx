import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // In a real app, this is where you'd send to Sentry / LogRocket / etc.
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.error) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;