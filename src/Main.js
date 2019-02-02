import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImage: ''
}
const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImage }) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImage})`
    }

    const component = (
        <header style={headerStyle}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )

    return component;
};
const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

FullHeader.prototype = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
