import React, { Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import { EntityContext } from '../context/EntityContext';
import Blocks from './Blocks';

const LayoutBuilder = ({ parents }) => {
    if (parents.length === 0) {
        console.log(parents);
        return null;
    }
    const { params: { catalog } } = useContext(EntityContext);
    const sections = parents[0].getFieldValue('layout_builder__layout');
    if (!Array.isArray(sections) || sections.length === 0) {
        return null;
    }
    return (
        <div>
            {
                sections.map((sect, i) => {
                    let def = catalog.sections.find((el) => el.id === sect?.layout_id);
                    const regions = sect.components.reduce((acc, current, i) => (typeof acc[current.region] !== 'undefined')
                        ? { ...acc, [current.region]: [...acc[current.region], current] }
                        : { ...acc, [current.region]: [current] },
                        {});

                    const regionsBlocks = {};
                    Object.keys(regions).map((k, i) => {
                        return regionsBlocks[k] = <Blocks blocks={regions[k]} parents={parents} />
                    })
                    console.log(regionsBlocks);
                    const sectionKey = sect?.layout_settings?.section_uuid !== undefined ? sect.layout_settings.section_uuid : i;
                    if (typeof def !== 'undefined') {
                        const CustomSection = def.component;
                        return (
                            <Suspense key={sectionKey} fallback={<div>Loading...</div>}>
                                <CustomSection {...regionsBlocks} regions={regions} layoutId={sect.layout_id} parents={parents} />
                            </Suspense>
                        );
                        //return React.createElement(CustomSection, { ...properties, key: i });
                    }
                    return (
                        <Section key={sectionKey} regions={regions} layoutId={sect.layout_id} parents={parents} />
                    );
                })}
        </div>
    )
}

LayoutBuilder.propTypes = {
    parents: PropTypes.array.isRequired
}

export default LayoutBuilder