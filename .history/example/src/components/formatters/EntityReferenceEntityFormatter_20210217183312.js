import React, { useEffect, useState } from 'react';
import { LayoutBuilder, EntityManager } from 'react-drupal-layout-builder';
import { GlobalClient } from 'drupal-jsonapi-client'

const EntityReferenceEntityFormatter = ({ items, formatter, settings, parents }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entities, setEntities] = useState([]);
    const ids = items.map((item, i) => item.id);
    const [entityType, bundle] = items.reduce((acc, item) => item.type.split('--'), []);
    const baseUrl = 'http://drupal_react.local';
    useEffect(() => {
        GlobalClient.baseUrl = params.api.baseUrl;
        GlobalClient.sendCookies = false
        EntityManager.LoadAsyncMethod(
            'LoadEntityDisplayMultiple',
            [{ entityType, entityBundle: bundle, entityUuids: ids, include: [], pageOffset: 0, pageLimit: 50, viewMode: formatter.settings.view_mode }],
            setEntities,
            setError,
            setLoading
        );
    }, [entityType, bundle, ids, formatter.settings.view_mode]);


    if (!loading) {
        entities.map((entity) => {
            const arrayParents = [
                entity,
                ...parents
            ];
            return <div> key={entity.getId()}<LayoutBuilder parents={arrayParents} /></div>
        });
    }
    console.log('loading');
    return <div>loading...</div>;
}

export default EntityReferenceEntityFormatter;