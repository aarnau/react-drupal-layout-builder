import React from 'react';

const EmailFormatter = ({ items }) => {
    return (
        items.map((item, i) => {
            return (
                <a key={i} href={`mailto:${item}`}>{item}</a>
            );
        })
    );
}

export default EmailFormatter;