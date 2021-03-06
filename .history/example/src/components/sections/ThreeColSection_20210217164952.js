import React from 'react';
import PropTypes from 'prop-types';
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

ThreeColSection.propTypes = {
    parents: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired,
    regions: PropTypes.shape({}).isRequired,
    layoutId: PropTypes.string.isRequired
}

export default ThreeColSection;