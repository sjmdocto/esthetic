import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';

export default optionText = props => {
    return (
        <Text style = {styles.optionText}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    optionText: {
        color: 'white',
    },
});