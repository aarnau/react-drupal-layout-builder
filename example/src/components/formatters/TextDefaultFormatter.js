import React from 'react';

const TextDefaultFormatter = ({ items }) => {
    return (
        items.map((item, i) => {
            return (
                <div key={i} dangerouslySetInnerHTML={{ __html: item.processed }} />
            );
        })
    );
}

export default TextDefaultFormatter;