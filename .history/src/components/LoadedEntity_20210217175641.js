import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LayoutBuilder from './LayoutBuilder';
import { EntityContext } from '../context/EntityContext';
import { Entity as EntityManager } from '../drupal/Entity';
import { GlobalClient } from 'drupal-jsonapi-client'

const Entity = ({ properties, params, parents = [], loadedEntity = null }) => {
    const arrayParents = [loadedEntity, ...parents];
    return (
        <LayoutBuilder parents={arrayParents} />
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