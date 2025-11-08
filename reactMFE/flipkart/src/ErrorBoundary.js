import React from 'react';
import { FallbackProps } from 'react-error-boundary';

var parentThis;
// interface ErrorBoundaryProps {
//   children: React.ReactNode;
//   fallbackComponent: React.ComponentType<FallbackProps>;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
// }

class ErrorBoundary extends React.Component{
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    parentThis=  this;
    window.addEventListener("error",parentThis.hello);
  }

  hello(event){
 console.log(event);
 this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    parentThis.state = { hasError: true };
    parentThis.render();
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children, fallbackComponent: FallbackComponent }  = this.props;

    if (hasError) {
      return <FallbackComponent />;
    }

    return children;
  }
}

export default ErrorBoundary;