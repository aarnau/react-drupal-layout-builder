import React, { useContext } from 'react';
import { EntityContext } from '../context/EntityContext';
import Formatter from './Formatter';

const FieldBlock = ({ block, parents }) => {
    console.log(parents, block);
    let [blockType, entityType, bundle, fieldName] = block.configuration.id.split(':');
    const items = parents[0].getFieldValue(fieldName);
    const settings = parents[0].getFieldConfig(fieldName);
    return (
        <Formatter items={items} configuration={block.configuration} settings={settings} parents={parents} />
    );
}

export default FieldBlock;