import { time } from 'locutus/php/datetime';
import React from 'react';

const TimestampFormatter = ({ items, settings }) => {
    const options = {
        granularity: settings.granularity,
    };
    return (
        items.map((item, i) => {
            if (time() > item) {

            } else {

            }
            return (
                <div key={i}>{item}</div>
            );
        })
    );
}

export default TimestampFormatter;