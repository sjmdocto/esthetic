import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

/** function OptionText
 * inputs: selection, filterSelection, noneKey, onSelect()
 * output: <TouchableOpacity> object
 *
 * description:
 * Called by Menu.js, and is used to create a button
 * for each filter option. The button changes color when selected.
 *
 * INVARIANT:
 * Only one OptionText object can be selected at a time per filter type.
 * e.g. only one color can be selected at a time.
 * **/

const OptionText = (props) => {
  const [textColor, setTextColor] = useState('white');
  // textColor depends on whether this OptionText object is selected
  // so to properly render, call useEffect when changing textColor
  useEffect(() => {
    if (props.filterSelection === props.selection) {
      setTextColor('black');
    } else {
      setTextColor('white');
    }
  }, [props.filterSelection, props.selection]);

  const selectionHandler = (selection, filterSelection, noneKey) => {
    // if filterSelection === 'none',
    // OR if selection !== filterSelection
    // set filterSelection to selection and make textColor black
    console.log('selectionHandler selection:' + selection);
    console.log('selectionHandler filterSelection:' + filterSelection);
    if (filterSelection === noneKey || selection !== filterSelection) {
      props.onSelect(selection);
      console.log('menu filterSelection:' + props.filterSelection);
    }
    // if selection === to filterSelection,
    // or if some other scenario somehow comes up,
    // set filterSelection to 'none'
    else {
      props.onSelect(noneKey);
      console.log('menu filterSelection:' + props.filterSelection);
    }
  };
  return (
    <TouchableOpacity
      onPress={selectionHandler.bind(
        this,
        props.selection,
        props.filterSelection,
        props.noneKey,
      )}
      style={styles.buttonContainer}>
      <View>
        <Text style={{color: textColor}}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    //borderWidth: 1,
    //borderColor: 'black',
    width: 100,
  },
  // DEPRECATED: was used to style View within TouchableOpacity
  button: {
    //flexDirection: 'row',
  },
});

export default OptionText;
