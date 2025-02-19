import React, { Component } from 'react';


function logErrorToService(error, errorInfo) {
    // Send the error to a logging service (e.g., Sentry, Loggly)
    // Include additional information like errorInfo for better debugging
    // loggingService.logError(error, errorInfo);
    console.error('Logged error:', error, errorInfo);
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service like AppSignal
        logErrorToService(error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <p>Something went wrong 😭</p>

                    {error.message && <span>Here's the error: {error.message}</span>}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;