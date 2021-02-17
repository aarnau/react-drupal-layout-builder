import React from 'react';

const NumericFormatterBase = ({ items, formatter, settings }) => {
    return (
        items.map((item, i) => {
            let prefixes = '';
            let suffixes = '';
            if (formatter.settings.prefix_suffix) {
                prefixes = settings.prefix.length ? settings.prefix : '';
                suffixes = settings.suffix.length ? settings.suffix : ''
            }
            return (
                <div key={i}>{`${prefixes}${item}${suffixes}`}</div>
            );
        })
    )
}

export default NumericFormatterBase;