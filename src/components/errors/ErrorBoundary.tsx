import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface StateError {
    hasError: boolean;
    error?: Error;
}

function logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Send the error to a logging service (e.g., Sentry, Loggly)
    // Include additional information like errorInfo for better debugging
    // loggingService.logError(error, errorInfo);
    console.error('Logged error:', error, errorInfo);
}

class ErrorBoundary extends Component<Props, StateError> {
    public state: StateError = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): StateError {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logErrorToService(error, errorInfo);
    }

    render() {
        const { hasError, error } = this.state;
        if (hasError) {
            return (
                <div>
                    <p>Une erreur est arrivée 😭</p>
                    {error?.message && <span>{error.name} = {error.message}</span>}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;