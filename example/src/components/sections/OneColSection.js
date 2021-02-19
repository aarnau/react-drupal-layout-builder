import React from 'react';
import PropTypes from 'prop-types';

const OneColSection = ({ regions, layoutId, parents, content }) => {
    return (
        <div className="layout layout--one-section">
            <div className="layout__region layout__region--content">
                {content}
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