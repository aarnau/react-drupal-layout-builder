import React from 'react';

const BasicStringFormatter = ({ items }) => {
    return (
        items.map((item, i) => {
            return (
                <div key={i}>{item}</div>
            );
        })
    );
}

export default BasicStringFormatter;