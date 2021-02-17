import React from 'react';
import NumericFormatterBase from './NumericFormatterBase';

const DecimalFormatter = ({ items, formatter, settings }) => {
    const numberFormat = require('locutus/php/strings/number_format');
    const newItems = items.map((value) => {
        return numberFormat(value, formatter.settings.scale, formatter.settings.decimal_separator, formatter.settings.thousand_separator);
    });
    return (
        <NumericFormatterBase items={newItems} formatter={formatter} settings={settings} />
    )
}

export default DecimalFormatter;