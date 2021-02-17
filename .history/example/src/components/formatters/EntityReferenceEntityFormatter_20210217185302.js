import React, { useContext, useEffect, useState } from 'react';
import { LayoutBuilder, EntityContext, EntityManager } from 'react-drupal-layout-builder';
import { GlobalClient } from 'drupal-jsonapi-client'

const EntityReferenceEntityFormatter = ({ items, formatter, settings, parents }) => {
    const { params } = useContext(EntityContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entities, setEntities] = useState(null);
    const ids = items.map((item, i) => item.id);
    const [entityType, bundle] = items.reduce((acc, item) => item.type.split('--'), []);
    /*
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
        }, [bundle, entityType, formatter.settings.view_mode, ids, params.api.baseUrl]);
    */

    useEffect(() => {
        GlobalClient.baseUrl = params.api.baseUrl;
        GlobalClient.sendCookies = false
        EntityManager.LoadAsyncMethod(
            'LoadEntityDisplay',
            [bundle, entityType, formatter.settings.view_mode, ids[0], params.api.baseUrl],
            setEntities,
            setError,
            setLoading
        );
    }, [bundle, entityType, formatter.settings.view_mode, ids, params.api.baseUrl]);

    console.log('loading');
    if (!loading && entities !== null) {
        console.log(entities);
        const ents = [entities];
        ents.map((entity) => {
            const arrayParents = [
                entity,
                ...parents
            ];
            return <div> key={entity.getId()}<LayoutBuilder parents={arrayParents} /></div>
        });
    }
    return <div>loading...</div>;
}

export default EntityReferenceEntityFormatter;