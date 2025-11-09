import React from 'react';
import { FallbackProps } from 'react-error-boundary';

var parentThis: any;
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackComponent: React.ComponentType<FallbackProps>;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    parentThis=  this;
    window.addEventListener("error",parentThis.hello);
  }

  hello(event: any){
 console.log(event);
 this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    // alert(1010101)
    parentThis.state = { hasError: true };
    parentThis.render();
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children, fallbackComponent: FallbackComponent } : any = this.props;

    if (hasError) {
      return <FallbackComponent />;
    }

    return children;
  }
}

export default ErrorBoundary;