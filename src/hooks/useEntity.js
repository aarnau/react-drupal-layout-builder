import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Entity } from '../drupal/Entity';
import { GlobalClient } from 'drupal-jsonapi-client'

export const useEntity = (params) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entity, setEntity] = useState(null);
    const i18nEnable = (typeof params.i18next === 'undefined') ? false : true;
    useEffect(() => {
        (async () => {
            try {
                if (params.loadedEntity !== undefined) {
                    setEntity(params.loadedEntity);
                } else {
                    GlobalClient.baseUrl = params.api.baseUrl;
                    GlobalClient.sendCookies = false
                    const viewMode = (params.entity?.viewMode === 'undefined') ? 'default' : params.entity.viewMode
                    const entity = await Entity.Load(params.entity.entityType, params.entity.bundle, params.entity.uuid, [], false, viewMode);
                    setEntity(entity);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [params.api.baseUrl, params.entity.viewMode, params.entity.bundle, params.entity.entityType, params.entity.uuid, params.loadedEntity]);
    const t = (string) => {
        if (i18nEnable) {
            return params.i18next(string);
        }
        return string;
    }

    return { entity, error, loading, t, params }
}

useEntity.propTypes = {
    params: PropTypes.shape({
        api: PropTypes.shape({
            baseUrl: PropTypes.string.isRequired,
            settings: PropTypes.shape({})
        }).isRequired,
        entity: PropTypes.shape({
            entityType: PropTypes.string.isRequired,
            bundle: PropTypes.string.isRequired,
            viewMode: PropTypes.string,
            uuid: PropTypes.string.isRequired
        }).isRequired,
        loadedEntity: PropTypes.shape(),
        i18next: PropTypes.func
    }).isRequired
}