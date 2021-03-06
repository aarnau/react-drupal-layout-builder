import React from 'react';

const StringFormatter = ({ items }) => {
    return (
        items.map((item, i) => {
            return (
                <div key={i}>{item}</div>
            );
        })
    );
}

export default StringFormatter;