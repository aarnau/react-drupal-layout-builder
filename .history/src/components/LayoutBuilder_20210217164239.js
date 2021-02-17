import React, { Suspense, useContext } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import { EntityContext } from '../context/EntityContext';

const LayoutBuilder = ({ parents }) => {
    const { params: { catalog } } = useContext(EntityContext);
    const sections = parents[0].getFieldValue('layout_builder__layout');
    if (sections === null) {
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
                    if (typeof def !== 'undefined') {
                        const CustomSection = def.component;
                        console.log(def);
                        return (
                            <Suspense key={i} fallback={<div>Loading...</div>}>
                                <CustomSection regions={regions} layoutId={sect.layout_id} parents={parents} />
                            </Suspense>
                        );
                        //return React.createElement(CustomSection, { ...properties, key: i });
                    }

                    return (
                        <Section key={i} regions={regions} layoutId={sect.layout_id} parents={parents} />
                    );
                })}
        </div>
    )
}


LayoutBuilder.propTypes = {
    parents: PropTypes.array().isRequired
}

export default LayoutBuilder