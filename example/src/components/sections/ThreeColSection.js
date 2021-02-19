import React from 'react';
import PropTypes from 'prop-types';

const ThreeColSection = ({ regions, layoutId, parents, first, second, third }) => {
    return (
        <div className="layout layout--twocol-section">
            <div className="layout__region layout__region--first">
                {first}
            </div>
            <div className="layout__region layout__region--second">
                {second}
            </div>
            <div className="layout__region layout__region--third">
                {third}
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