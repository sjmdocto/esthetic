import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

/**
 * Creates a button for the FilterMenu options.
 * Only one Option obj can be selected at a time per filter type.
 * Currently, the only filter types are color and type (clothing type)
 * e.g. only one color can be selected at a time
 * @function Option
 * @param {*} props
 * @param {number} props.selection - key for this filter option
 * @param {number} props.currentSelection - currently selected filter in Menu
 * @param {number} props.noneKey - 0
 * @param {string} props.text
 * @param {func} props.onSelect - changeSelectedColor() or changeSelectedClothing()
 */

const Option = (props) => {
  const [textColor, setTextColor] = useState('white');

  /**
   * Side effect of changing currentSelection is to potentially change the textColor
   * of this OptionText object
   */
  useEffect(() => {
    /* if this filter option is equal to the currently selected filter,
     * then set textColor to Black
     */
    if (props.currentSelection === props.selection) {
      setTextColor('black'); // option is selected
    } else {
      setTextColor('white'); // option is NOT selected
    }
  }, [props.currentSelection, props.selection]);

  /**
   * @function selectionHandler
   * @param {number} selection
   * @param {number} currentSelection
   * @param {number} noneKey - 0
   */
  const selectionHandler = (selection, currentSelection, noneKey) => {
    // if currentSelection === 'none',
    // OR if selection !== currentSelection
    // set currentSelection to selection and make textColor black
    if (currentSelection === noneKey || selection !== currentSelection) {
      props.onSelect(selection);
    }
    // if selection === to currentSelection,
    // set currentSelection to 'none'
    else {
      props.onSelect(noneKey);
    }
  };
  return (
    <TouchableOpacity
      onPress={selectionHandler.bind(
        this,
        props.selection,
        props.currentSelection,
        props.noneKey,
      )}
      style={styles.buttonContainer}
      accessible={true}
      accessibilityLabel={`${props.text} filter button`}>
      <View>
        <Text style={{color: textColor}}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
  },
});

export default Option;
