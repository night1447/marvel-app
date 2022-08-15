import {useCallback, useState} from "react";

export const useHttp = () => {
    const [hasLoading, setHasLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setHasLoading(true);
        try {
            const response = await fetch(url, {method, body, headers});
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }
            const data = await response.json();
            setHasLoading(false);
            return data;
        } catch (error) {
            setHasError(true);
            setHasLoading(false);
            return  error;
        }
    }, [])

    const clearError = useCallback(() => {
        setHasError(null);
    }, [])

    return {hasLoading, request, hasError, clearError};
}