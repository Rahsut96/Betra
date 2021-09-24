import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PropType from "prop-types";

const page = StyleSheet.create({
    inputWrapper: {
        position: "relative",
    },

    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#44444488",
        color: "#444",
        height: 50,
        padding: 10,
        marginBottom: 30,
        borderRadius: 5,
    },
    error: {
        borderColor: "#ff4d4fbb",
        color: "#ff4d4fbb",
    },
    errorMessage: {
        color: "#ff4d4fbb",
        position: "absolute",
        bottom: 10,
    },
});

const InputField = ({ error, ...rest }) => {
    const style = error?.message
        ? { ...page.input, ...page.error }
        : page.input;
    return (
        <View style={page.inputWrapper}>
            <TextInput style={style} {...rest} />
            {!!error?.message && (
                <Text style={page.errorMessage}>{error?.message}</Text>
            )}
        </View>
    );
};
InputField.propTypes = {
    error: PropType.shape({ message: PropType.string }),
};
InputField.defaultProps = {
    error: { message: "" },
};

export default InputField;
