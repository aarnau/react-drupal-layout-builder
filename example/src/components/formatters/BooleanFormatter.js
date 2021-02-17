import React from 'react';
import { useTranslation } from 'react-i18next';

const BooleanFormatter = ({ items, formatter }) => {
    const { t } = useTranslation('ns', { useSuspense: false });
    const outputFormats = {
        'default': ['on_label', 'off_label'],
        'yes-no': [t('Yes'), t('No')],
        'true-false': [t('True'), t('False')],
        'on-off': [t('On'), t('Off')],
        'enabled-disabled': [t('Enabled'), t('Disabled')],
        'boolean': [1, 0],
        'unicode-yes-no': ['✔', '✖'],
    };
    if (formatter.settings.format === 'custom') {
        return (
            items.map((item, i) =>
                <div key={i}>{item ? formatter.settings.format_custom_true : formatter.settings.format_custom_false}</div>
            )
        )
    }
    return (
        items.map((item, i) =>
            <div key={i}>{item ? outputFormats[formatter.settings.format][0] : outputFormats[formatter.settings.format][1]}</div>
        )
    )
}

export default BooleanFormatter;