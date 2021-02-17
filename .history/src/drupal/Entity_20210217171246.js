import { EntityNotFound, GlobalClient, Entity as EntityManager } from 'drupal-jsonapi-client'
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

const TypeHeaders = {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
}

export class Entity extends EntityManager {

    static FromResponse(response) {
        const entity = new Entity()
        entity._applySerializedData(response)
        return entity
    }

    static async LoadEntityDisplay(
        entityType,
        entityBundle,
        entityUuid,
        includeRelationships = [],
        refreshCache = false,
        viewMode = 'default'
    ) {
        if (Entity.Cache[entityUuid] && refreshCache === false) {
            return Entity.FromResponse(Entity.Cache[entityUuid]);
        }

        const apiParams = new DrupalJsonApiParams();
        apiParams.addFilter('id', [entityUuid], 'IN');
        if (includeRelationships.length > 0) {
            apiParams.addInclude(includeRelationships);
        }
        const response = await GlobalClient.send({
            url: `/jsonapi/${entityType}/${entityBundle}/${viewMode}?${apiParams.getQueryString({ encode: false })}`,
            method: 'GET',
            headers: TypeHeaders,
        });
        const json = response.data;
        if (json && json.data) {
            const entity = Entity.FromResponse(json.data[0]);
            Entity.Cache[entityUuid] = { ...entity._serialize().data, id: entity.entityUuid };
            // Warm EntityCache so future requests for .expand can pull from cache
            if (json.included) {
                json.included.forEach((includedData) => {
                    const includedEntity = Entity.FromResponse(includedData);
                    Entity.Cache[includedEntity.entityUuid] = {
                        ...includedEntity._serialize().data,
                        id: includedEntity.entityUuid,
                    };
                });
            }
            return entity;
        }

        throw new EntityNotFound(`Failed to find entity matching entity type ${entityType}, entity bundle ${entityBundle} and uuid ${entityUuid}`);
    }

    static async LoadEntityDisplayMultiple({
        entityType,
        entityBundle,
        entityUuids = [],
        include = [],
        pageOffset = 0,
        pageLimit = 50,
        viewMode = 'default'
    }) {
        const apiParams = new DrupalJsonApiParams();
        apiParams.addFilter('id', entityUuids, 'IN');
        apiParams.addPageLimit(pageLimit);
        if (include.length > 0) {
            apiParams.addInclude(include);
        }
        const response = await GlobalClient.send({
            url: `/jsonapi/${entityType}/${entityBundle}/${viewMode}?${apiParams.getQueryString({ encode: false })}`,
            method: 'GET',
            headers: TypeHeaders,
        })
        const json = response.data
        console.log(json);
        if (json && json.data && json.data.length && json.data.length > 0) {
            // Warm EntityCache so future requests for .expand can pull from cache
            if (json.included && json.included.length) {
                json.included.forEach((includedData) => {
                    const includedEntity = new Entity()
                    includedEntity._applySerializedData(includedData)
                    Entity.Cache[includedEntity.entityUuid] = {
                        ...includedEntity._serialize().data,
                        id: includedEntity.entityUuid,
                    }
                })
            }

            return json.data.map((item) => {
                const entity = new Entity()
                entity._applySerializedData(item)
                Entity.Cache[entity.entityUuid] = { ...entity._serialize().data, id: entity.entityUuid }
                return entity
            })
        }
        return json.data
    }

    static async LoadEntityDisplayByProperties({
        entityType,
        entityBundle,
        properties = {},
        include = [],
        pageOffset = 0,
        pageLimit = 50,
        viewMode = 'default'
    }) {
        const apiParams = new DrupalJsonApiParams();
        for (const field in properties) {
            apiParams.addFilter(field, properties.field.value, properties.field.operator);
        }
        apiParams.addPageLimit(pageLimit);
        if (include.length > 0) {
            apiParams.addInclude(include);
        }
        const response = await GlobalClient.send({
            url: `/jsonapi/${entityType}/${entityBundle}/${viewMode}?${apiParams.getQueryString({ encode: false })}`,
            method: 'GET',
            headers: TypeHeaders,
        })
        const json = response.data

        if (json && json.data && json.data.length && json.data.length > 0) {
            // Warm EntityCache so future requests for .expand can pull from cache
            if (json.included && json.included.length) {
                json.included.forEach((includedData) => {
                    const includedEntity = new Entity()
                    includedEntity._applySerializedData(includedData)
                    Entity.Cache[includedEntity.entityUuid] = {
                        ...includedEntity._serialize().data,
                        id: includedEntity.entityUuid,
                    }
                })
            }

            return json.data.map((item) => {
                const entity = new Entity()
                entity._applySerializedData(item)
                Entity.Cache[entity.entityUuid] = { ...entity._serialize().data, id: entity.entityUuid }
                return entity
            })
        }
        return json.data
    }

    static LoadAsyncMethod(method, params, setResult, setError, setLoading) {
        (async () => {
            try {
                if (typeof Entity[method] !== 'function') {
                    throw new Error('Missing method');
                }
                const entity = await Entity[method](...params);
                setResult(entity);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }

    getFieldValue(field) {
        let value = this?._attributes?.[field]?.values;
        if (value === undefined) {
            value = this?._relationships?.[field]?.data;
        }
        return (typeof value === 'undefined') ? null : (!Array.isArray(value) ? [value] : value);
    }

    getFieldConfig(field) {
        return this?._attributes?.[field]?.settings;
    }

    sectionByUuid(uuid) {
        return this.find((entity) => entity.uuid === uuid)
    }

    getId() {

    }

}