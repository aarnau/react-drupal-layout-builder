import React from 'react';
import { Blocks } from 'react-drupal-layout-builder'

const ThreeColSection = ({ regions, layoutId }) => {
    return (
        <div className="layout layout--twocol-section">
            <div className="layout__region layout__region--first">
                <Blocks blocks={regions.first} />
            </div>
            <div className="layout__region layout__region--second">
                <Blocks blocks={regions.second} />
            </div>
            <div className="layout__region layout__region--third">
                <Blocks blocks={regions.third} />
            </div>
        </div>
    )
}

export default ThreeColSection;