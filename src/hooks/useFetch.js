import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const useFetch = (
    url,
    accion,
    settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(url, settings);
                const entity = await resp.json();
                if (entity?.errors !== undefined) {
                    setError(entity.errors);
                } else {
                    accion(entity);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, accion, settings]);

    return { error, loading }
}

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    settings: PropTypes.shape({})
};