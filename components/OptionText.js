import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// change font color to black

export default optionText = props => {
    const [colorSelected, setColor] = useState(false);
    return (
        <TouchableOpacity onPress = {setColor.bind(this, !colorSelected)} style = {styles.button}>
            <View style = {styles.buttonContainer}>
                <Text style = {styles.optionText}>{props.children}</Text>
                <Icon 
                    name = "check"
                    size = {14}
                    color = {'white'}
                />
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        width: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    optionText: {
        color: 'white',
    },
});