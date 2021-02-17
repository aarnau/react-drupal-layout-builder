import React from 'react';
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

export default Section;