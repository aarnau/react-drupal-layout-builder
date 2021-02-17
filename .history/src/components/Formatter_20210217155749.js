import React, { Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import { EntityContext } from '../context/EntityContext';

const Formatter = ({ configuration, items, settings, parents }) => {
    let [blockType, entityType, bundle, fieldName] = configuration.id.split(':');
    const { params: { catalog } } = useContext(EntityContext);
    let def = catalog.formatters.find((el) => el.id === configuration.formatter.type);
    if (typeof def !== 'undefined') {
        const FieldFormatter = def.component;
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className={`field field--name-${fieldName} field--label-${configuration.formatter.label}`}>
                    {configuration.formatter.label !== 'hidden' && <div className='field__label'>{configuration.label}</div>}
                    <div className='field__item'>
                        <FieldFormatter items={items} formatter={configuration.formatter} settings={settings} parents={parents} />
                    </div>
                </div>
            </Suspense>
        );
    }
    return null;
}

Formatter.propTypes = {
    configuration: PropTypes.shape({
        label: PropTypes.string.isRequired,
        formatter: PropTypes.shape({
            type: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    items: PropTypes.array.isRequired,
    settings: PropTypes.shape({}),
    parents: PropTypes.array.isRequired
};

export default Formatter;