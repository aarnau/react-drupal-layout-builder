import React from 'react';
import PropTypes from 'prop-types';

const TwoColSection = ({ regions, layoutId, parents, first, second }) => {
    return (
        <div className="layout layout--twocol-section">
            <div className="layout__region layout__region--first">
                {first}
            </div>
            <div className="layout__region layout__region--second">
                {second}
            </div>
        </div>
    )
}

TwoColSection.propTypes = {
    parents: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired,
    regions: PropTypes.shape({}).isRequired,
    layoutId: PropTypes.string.isRequired
}

export default TwoColSection;