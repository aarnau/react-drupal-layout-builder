import React, { useContext, useCallback, useState } from 'react';
import { LayoutBuilder, EntityContext, EntityManager } from 'react-drupal-layout-builder';
import { GlobalClient } from 'drupal-jsonapi-client'

const EntityReferenceEntityFormatter = ({ items, formatter, settings, parents }) => {
    const { params } = useContext(EntityContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [entities, setEntities] = useState(null);
    useEffect(() => {
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
    }, [formatter.settings.view_mode, items, params.api.baseUrl]);
    /*
        useEffect(() => {
            GlobalClient.baseUrl = params.api.baseUrl;
            GlobalClient.sendCookies = false
            EntityManager.LoadAsyncMethod(
                'LoadEntityDisplay',
                [entityType, bundle, ids[0], [], false, formatter.settings.view_mode],
                setEntities,
                setError,
                setLoading
            );
        }, [bundle, entityType, formatter.settings.view_mode, ids, params.api.baseUrl]);
    */

    if (!loading) {
        const ents = [entity];
        ents.map((ent) => {
            const arrayParents = [
                ent,
                ...parents
            ];
            console.log(arrayParents);
            return <div> key={ent.getId()}<LayoutBuilder parents={arrayParents} /></div>
        });
    }
    console.log('loading');
    return <div>loading...</div>;
}

export default EntityReferenceEntityFormatter;