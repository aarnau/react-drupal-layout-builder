import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LayoutBuilder from './LayoutBuilder';
import { EntityContext } from '../context/EntityContext';
import { Entity as EntityManager } from '../drupal/Entity';
import { GlobalClient } from 'drupal-jsonapi-client'

const Entity = ({ properties, params, parents = [], loadedEntity = null }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entity, setEntity] = useState(null);
    const viewMode = (properties?.viewMode === undefined) ? 'default' : properties.viewMode
    console.log();
    useEffect(() => {
        if (loadedEntity !== null) {
            setEntity(loadedEntity);
            setLoading(false);
        } else {
            GlobalClient.baseUrl = params.api.baseUrl;
            GlobalClient.sendCookies = false
            EntityManager.LoadAsyncMethod(
                'LoadEntityDisplay',
                [properties.entityType, properties.bundle, properties.uuid, [], false, viewMode],
                setEntity,
                setError,
                setLoading
            );
        }
    }, [properties.entityType, properties.bundle, properties.uuid, viewMode, params.api.baseUrl, loadedEntity]);

    const arrayParents = [entity, ...parents];

    const context = {
        params: { ...params },
    };
    console.log(arrayParents);
    return (
        <EntityContext.Provider value={context}>
            {(!loading && error === null) ? <LayoutBuilder parents={arrayParents} /> : <div>Cargando...</div>}
        </EntityContext.Provider>
    );
}

Entity.propTypes = {
    properties: PropTypes.shape({
        entityType: PropTypes.string.isRequired,
        bundle: PropTypes.string.isRequired,
        viewMode: PropTypes.string,
        uuid: PropTypes.string.isRequired
    }).isRequired,
    params: PropTypes.shape({
        api: PropTypes.shape({
            baseUrl: PropTypes.string.isRequired,
            settings: PropTypes.shape({})
        }).isRequired,
        catalog: PropTypes.shape({
            sections: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    component: PropTypes.object,
                    regions: PropTypes.arrayOf(
                        PropTypes.shape({
                            id: PropTypes.string.isRequired,
                        })
                    ).isRequired,
                })
            ),
            blocks: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    component: PropTypes.object
                })
            ),
            formatters: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    component: PropTypes.object
                })
            )
        }).isRequired,
    })
}

export default Entity;