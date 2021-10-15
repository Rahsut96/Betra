import React, { useEffect, useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const buttonStyle = StyleSheet.create({
    button: {
        height: 50,
        lineHeight: 50,
        alignItems: 'center',
        borderWidth: 2,
        justifyContent: 'center',
        borderRadius: 5,
        color: '#444',
        paddingLeft: 24,
        paddingRight: 24,
        marginBottom: 20,
    },
    small: {
        height: 30,
        lineHeight: 30,
        // width: "auto",
        paddingLeft: 8,
        paddingRight: 8,
    },
    large: {
        height: 70,
        lineHeight: 70,
        fontSize: 30,
    },
    rounded: {
        borderRadius: 50,
    },

    buttonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabled: {
        opacity: 0.2,
    },
});
const CustomButton = ({
    title,
    size,
    disabled,
    rounded,
    style,
    textStyle,
    ...rest
}) => {
    const [composedStyle, setComposedStyle] = useState();

    useEffect(() => {
        let newStyle = {
            ...buttonStyle.button,
            ...buttonStyle[`${size}`],
            ...style,
        };
        if (rounded) {
            newStyle = { ...newStyle, ...buttonStyle.rounded };
        }
        setComposedStyle({ ...newStyle });

        // return () => {};
    }, [rounded, size, style]);
    return (
        <TouchableOpacity
            disabled={disabled}
            style={{ ...composedStyle, opacity: disabled ? 0.3 : 1 }}
            {...rest}
        >
            <Text style={{ ...buttonStyle.buttonText, ...textStyle }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.node,
    textStyle: Text.propTypes.style,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
};
CustomButton.defaultProps = {
    title: 'Save',
    textStyle: null,
    size: 'medium',
    rounded: false,
    disabled: false,
    style: undefined,
};

export default CustomButton;
