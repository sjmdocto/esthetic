import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

/**
 * Creates a button for the filter options, called by Menu.js
 * Only one OptionText obj can be selected at a time per filter type
 * Currently, the only filter types are color and type (clothing type)
 * e.g. only one color can be selected at a time
 * @param {*} props
 * @param {number} props.selection - key for this filter option
 * @param {} props.filterSelection - currently selected filter in Menu
 * @param {number} props.noneKey - 0
 * @param {func} props.onSelect - changeSelectedColor() or changeSelectedClothing()
 */

const OptionText = (props) => {
  /* TEXT COLOR STUFF */

  // state variable
  const [textColor, setTextColor] = useState('white');

  /**
   * Side effect of changing filterSelection is to potentially change the textColor
   * of this OptionText object
   */
  useEffect(() => {
    /* if this filter option is equal to the currently selected filter,
     * then set textColor to Black
     */
    if (props.filterSelection === props.selection) {
      setTextColor('black'); // option is selected
    } else {
      setTextColor('white'); // option is NOT selected
    }
  }, [props.filterSelection, props.selection]);

  /**
   * Side effect of changing filterSelection is to potentially change the textColor
   * @param {number} selection - this OptionText filter selection
   * @param {number} filterSelection - Menu's currently selected filter
   * @param {number} noneKey - 0
   */
  const selectionHandler = (selection, filterSelection, noneKey) => {
    // if filterSelection === 'none',
    // OR if selection !== filterSelection
    // set filterSelection to selection and make textColor black
    // console.log('selectionHandler selection:' + selection);
    // console.log('selectionHandler filterSelection:' + filterSelection);
    if (filterSelection === noneKey || selection !== filterSelection) {
      props.onSelect(selection);
    }
    // if selection === to filterSelection,
    // or if some other scenario somehow comes up,
    // set filterSelection to 'none'
    else {
      props.onSelect(noneKey);
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
});

export default OptionText;
