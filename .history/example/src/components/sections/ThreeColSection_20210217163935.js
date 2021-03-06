import React from 'react';
import { Blocks } from 'react-drupal-layout-builder'

const ThreeColSection = ({ regions, layoutId, parents }) => {
    return (
        <div className="layout layout--twocol-section">
            <div className="layout__region layout__region--first">
                <Blocks blocks={regions.first} parents={parents} />
            </div>
            <div className="layout__region layout__region--second">
                <Blocks blocks={regions.second} parents={parents} />
            </div>
            <div className="layout__region layout__region--third">
                <Blocks blocks={regions.third} parents={parents} />
            </div>
        </div>
    )
}

export default ThreeColSection;