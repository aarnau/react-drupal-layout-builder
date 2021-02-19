import React from 'react';

const ImageFormatter = ({ items, formatter }) => {
    return (
        items.map((item, i) => {
            const imageStyle = formatter?.settings?.image_style !== 'undefinded' ? formatter.settings.image_style : null;
            if (imageStyle === null) {
                console.error(`Image style not found`);
                return null;
            }
            const url = item?.meta?.imageDerivatives?.links?.[imageStyle]?.href;
            if (url === undefined) {
                console.error(`Image derivative ${imageStyle} not found`);
                return null;
            }
            const alt = item?.meta?.alt;
            const title = item?.meta?.title;
            return (
                <img key={i} src={url} alt={alt} title={title} />
            );
        })
    );
}

export default ImageFormatter;