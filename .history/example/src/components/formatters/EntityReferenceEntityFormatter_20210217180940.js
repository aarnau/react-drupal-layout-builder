import React, { Suspense, useContext, useEffect, useState } from 'react';
import { LayoutBuilder, EntityContext, EntityManager } from 'react-drupal-layout-builder';
import { GlobalClient } from 'drupal-jsonapi-client'

const EntityReferenceEntityFormatter = ({ items, formatter, settings, parents }) => {
    const { params } = useContext(EntityContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entities, setEntities] = useState([]);
    const ids = items.map((item, i) => item.id);
    const [entityType, bundle] = items.reduce((acc, item) => item.type.split('--'), []);

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
    }, [entityType, bundle, ids, formatter.settings.view_mode, params.api.baseUrl, setEntities, setLoading, setError]);


    if (!loading) {
        entities.map((entity) => {
            const arrayParents = [
                entity,
                ...parents
            ];

        });
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {!loading ? entities.map((entity) => {
                const arrayParents = [
                    entity,
                    ...parents
                ];
                console.log(arrayParents);
                return <LayoutBuilder key={entity.getId()} parents={arrayParents} />
            }) : <div>loading,,,</div>}
        </Suspense>
    );
}

export default EntityReferenceEntityFormatter;