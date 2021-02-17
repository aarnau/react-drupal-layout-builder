import React from 'react';
import PropTypes from 'prop-types';
import Blocks from "./Blocks"

const Section = ({ regions, layoutId, parents }) => {
    return (
        <div className={`layout layout--${layoutId}`}>
            {
                Object.keys(regions).map((k, i) => {
                    return (
                        <div key={k} className={`layout__region layout__region--${k}`}>
                            <Blocks blocks={regions[k]} parents={parents} />
                        </div>
                    );
                })
            }
        </div>
    )
}

Section.propTypes = {
    parents: PropTypes.array.isRequired,
    regions: PropTypes.shape({}).isRequired,
    layoutId: PropTypes.string.isRequired
}

export default Section;