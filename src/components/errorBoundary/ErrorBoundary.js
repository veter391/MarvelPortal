import { useEffect, useState } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

function ErrorBoundary(props) {

    const [error, setError] = useState(false);

    useEffect(() => {
        const handleError = (error, errorInfo) => {
            console.log(error, errorInfo);
            setError(true);
        };

        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, [])

    if (error) return <ErrorMessage />;

    return props.children;
}

export default ErrorBoundary;