import React from 'react';
import { Blocks } from 'react-drupal-layout-builder'

const TwoColSection = ({ regions, layoutId }) => {
    return (
        <div className="layout layout--twocol-section">
            <div className="layout__region layout__region--first">
                <Blocks blocks={regions.first} />
            </div>
            <div className="layout__region layout__region--second">
                <Blocks blocks={regions.second} />
            </div>
        </div>
    )
}

export default TwoColSection;