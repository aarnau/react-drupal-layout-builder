import React from 'react';
import { Blocks } from 'react-drupal-layout-builder'

const OneColSection = ({ regions, layoutId, parents }) => {
    return (
        <div className="layout layout--one-section">
            <div className="layout__region layout__region--content">
                <Blocks blocks={regions.content} parents={parents} />
            </div>
        </div>
    )
}

export default OneColSection;