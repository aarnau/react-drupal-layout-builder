import React, { Suspense, useContext } from 'react';
import { EntityContext } from '../context/EntityContext';
import FieldBlock from './FieldBlock';
import InlineBlock from './InlineBlock';
import ExtraFieldBlock from './ExtraFieldBlock';

const Blocks = ({ blocks, parents }) => {
    const { params: { catalog } } = useContext(EntityContext);
    const BlockCatalog = [
        ...catalog.blocks,
        {
            "id": "field_block",
            "component": FieldBlock
        },
        {

            "id": "inline_block",
            "component": InlineBlock
        },
        {
            "id": "extra_field_block",
            "component": ExtraFieldBlock
        },
    ];
    return (
        <div>
            {
                blocks.map(block => {
                    let def = BlockCatalog.find((el) => el.id === block.configuration.id);
                    if (typeof def !== 'undefined') {
                        const CustomBlock = def.component;
                        return (
                            <Suspense key={block.uuid} fallback={<div>Loading...</div>}>
                                <CustomBlock block={block} parents={parents} />
                            </Suspense>
                        );
                    }
                    let [blockType] = block.configuration.id.split(':');
                    def = BlockCatalog.find((el) => el.id === blockType);
                    if (typeof def !== 'undefined') {
                        const ComponentBlock = def['component'];
                        return (
                            <ComponentBlock key={block.uuid} block={block} parents={parents} />
                        )
                    }
                    return null;
                })
            }
        </div>
    )
}

export default Blocks;