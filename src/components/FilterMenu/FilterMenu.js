import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ColorChoices from './Option/ColorChoices';
import TypeChoices from './Option/TypeChoices';
import {styles} from './FilterMenu.style';

/**
 * @function FilterMenu
 * @param {*} props
 * @param {boolean} props.visible - sets visibility of menu
 * @param {func} props.onClose - close menu
 * @param {func} props.setFilterColor
 * @param {func} props.setFilterType
 */

const FilterMenu = (props) => {
  /* COLOR FILTER CODE */
  const [selectedColor, setSelectedColor] = useState(0);

  /**
   * Sets menu's selected color to input color,
   * and sets global filter color to input color.
   * Not used by menu, but is passed to Option
   * @function changeSelectedClothing
   * @param {number} color
   * @returns {void}
   */
  const changeSelectedColor = (color) => {
    setSelectedColor(color);
    props.setFilterColor(color);
  };

  /* TYPE FILTER CODE */
  const [selectedClothing, setSelectedClothing] = useState(0);

  /**
   * Sets menu's selected type to input type,
   * and sets global filter type to input type.
   * Not used by menu, but is passed to OptionText
   * @function changeSelectedClothing
   * @param {number} clothing
   * @returns {void}
   */
  const changeSelectedClothing = (clothing) => {
    setSelectedClothing(clothing);
    props.setFilterType(clothing);
  };

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType={'fade'}>
      <View style={styles.menuScreen}>
        <View style={styles.menuArea}>
          <View style={styles.menuHeader}>
            <Text style={styles.filtersTitle}>Filters</Text>
          </View>
          <View style={styles.menuBody}>
            <View style={styles.colorsContainer}>
              <View style={styles.categoriesHeader}>
                <Icon name="circle" size={18} color={'white'} />
                <Text style={styles.categoriesText}>Colors</Text>
              </View>
              <ColorChoices
                style={styles.optionsContainer}
                currentColor={selectedColor}
                selectColor={changeSelectedColor}
              />
            </View>
            <View style={styles.clothingContainer}>
              <View style={styles.categoriesHeader}>
                <Icon name="circle" size={18} color={'white'} />
                <Text style={styles.categoriesText}>Clothing</Text>
              </View>
              <TypeChoices
                style={styles.optionsContainer}
                currentType={selectedClothing}
                selectType={changeSelectedClothing}
              />
            </View>
            <View style={styles.doneContainer}>
              <TouchableOpacity
                onPress={props.onClose}
                style={styles.doneButton}
                accessible={true}
                accessibilityLabel={'Done button'}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View
            style={styles.nonMenuArea}
            accessible={true}
            accessibilityLabel={'Outside of Filter Menu area'}
            accessibilityHint={'Closes Filter Menu'}
          />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

export default FilterMenu;
