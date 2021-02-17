import React, { useContext, useEffect, useState } from 'react';
import { Entity, EntityContext, EntityManager } from 'react-drupal-layout-builder';
import { GlobalClient } from 'drupal-jsonapi-client'

const EntityReferenceEntityFormatter = ({ items, formatter, settings, parents }) => {
    const { params } = useContext(EntityContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entities, setEntities] = useState([]);
    const ids = items.map((item, i) => item.id);
    const [entityType, bundle] = items.reduce((acc, item) => item.type.split('--'), []);

    GlobalClient.baseUrl = params.api.baseUrl;
    GlobalClient.sendCookies = false
    EntityManager.LoadAsyncMethod(
        'LoadEntityDisplayMultiple',
        [{ entityType, entityBundle: bundle, entityUuids: ids, include: [], pageOffset: 0, pageLimit: 50, viewMode: formatter.settings.view_mode }],
        setEntities,
        setError,
        setLoading
    );

    if (!loading) {
        entities.map((entity) => {
            const properties = {
                entityType,
                bundle,
                uuid: entity.getId(),
                viewMode: formatter.settings.view_mode
            };
            console.log(entity);
            return (<Entity properties={properties} parents={parents} loadedEntity={entity} />);
        });
    } else {
        return (<div>loading...</div>);
    }
}

export default EntityReferenceEntityFormatter;