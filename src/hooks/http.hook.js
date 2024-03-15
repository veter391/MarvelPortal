import { useState, useCallback } from "react";

export function useHttp() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        // before to send a request, setting loading(true)
        setLoading(true);

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }
            
            const data = await response.json();

            // if everything gone okay disable loading
            setLoading(false);
            return data;

        } catch (error) {
            // if error disable loading
            setLoading(false);
            setError(error.message);
            throw error;
        }

    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError}
}