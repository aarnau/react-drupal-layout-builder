import React from 'react';
import PropTypes from 'prop-types';
import Formatter from './Formatter';

const FieldBlock = ({ block, parents }) => {
    if (parents === undefined) {
        console.log(parents, block);
        return <div>nada</div>;
    }
    let [blockType, entityType, bundle, fieldName] = block.configuration.id.split(':');
    const items = parents[0].getFieldValue(fieldName);
    const settings = parents[0].getFieldConfig(fieldName);
    return (
        <Formatter items={items} configuration={block.configuration} settings={settings} parents={parents} />
    );
}

FieldBlock.propTypes = {
    block: PropTypes.shape({}).isRequired,
    parents: PropTypes.array.isRequired
}

export default FieldBlock;