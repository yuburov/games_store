/* eslint-disable react/no-unused-state */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { ErrorInfo, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Navigate to="/error" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
