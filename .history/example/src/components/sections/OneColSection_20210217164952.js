import React from 'react';
import PropTypes from 'prop-types';
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

OneColSection.propTypes = {
    parents: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired,
    regions: PropTypes.shape({}).isRequired,
    layoutId: PropTypes.string.isRequired
}

export default OneColSection;