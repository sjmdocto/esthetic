import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

// change font color to black

const OptionText = (props) => {
  const [textColor, setTextColor] = useState('white');

  // textColor depends on whether this OptionText object is selected
  useEffect(() => {
    if (props.selectedOption === props.selection) {
      setTextColor('black');
    } else {
      setTextColor('white');
    }
  }, [props.selectedOption, props.selection]);

  const selectionHandler = (selection, selectedOption, noneKey) => {
    // if selectedOption === 'none',
    // OR if selection !== selectedOption
    // set selectedOption to selection and make textColor black
    console.log('selectionHandler selection:' + selection);
    console.log('selectionHandler selectedOption:' + selectedOption);
    console.log('selectionHandler noneKey:' + noneKey);
    if (selectedOption === noneKey || selection !== selectedOption) {
      props.onSelect(selection);
      console.log('menu selectedOption:' + props.selectedOption);
      console.log('textColor:' + textColor);
    }
    // if selection === to selectedOption,
    // or if some other scenario somehow comes up,
    // set selectedOption to 'none'
    else {
      props.onSelect(noneKey);
      console.log('menu selectedOption:' + props.selectedOption);
      console.log('textColor:' + textColor);
    }
  };
  return (
    <TouchableOpacity
      onPress={selectionHandler.bind(
        this,
        props.selection,
        props.selectedOption,
        props.noneKey,
      )}
      style={styles.button}>
      <View style={styles.buttonContainer}>
        <Text style={{color: textColor}}>{props.children}</Text>
        {/* DEPRECATED */}
        {/* <Icon name="check" size={14} color={'white'} /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //borderWidth: 1,
    borderColor: 'black',
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default OptionText;
