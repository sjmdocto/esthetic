import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import OptionText from './OptionText';

// const EST_ORANGE = 'rgb(227, 131, 4)';
const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

// To-do: resize vertical layout of things depending on whether phone has notch
// To-do: try to consolidate clothingContainer and colorsContainer to one style
//        bc they might have the same style properties
// To-do: Consider removing noneKey prop for OptionText since it will always be 0
// To-do: Consolidate color OptionTexts to ColorOptions.js
// To-do: Consolidate clothing OptionTexts to ClothingOptions.js
const colorKey = {
  none: 0,
  black: 1,
  white: 2,
  grey: 3,
  red: 4,
  orange: 5,
  yellow: 6,
  green: 7,
  blue: 8,
  purple: 9,
  multicolored: 10,
};
// Add dresses, and other types we're missing?
const typeKey = {
  none: 0,
  outerwear: 1,
  formalwear: 2,
  sweaters: 3,
  hoodies: 4,
  buttonUps: 5,
  tees: 6,
  pants: 7,
  shorts: 8,
  activeWear: 9,
  shoes: 10,
};

/**
 * Menu modal, called by App.js
 * @param {*} props
 * @param {boolean} props.visible - sets visibility of menu
 * @param {func} props.onClose - close menu
 * @param {func} props.setFilterColor
 * @param {func} props.setFilterType
 */

const Menu = (props) => {
  /* COLOR FILTER STUFF */

  // state variable
  const [selectedColor, setselectedColor] = useState(0);

  /**
   * Sets menu's selected color to input color,
   * and sets global filter color to input color.
   * Not used by menu, but is passed to OptionText
   * @param
   */
  const changeSelectedColor = (color) => {
    // console.log('changeSelectedColor input:' + color);
    setselectedColor(color);
    props.setFilterColor(color);
  };

  // useEffect(() => {
  //   console.log('selectedColor is now:' + selectedColor);
  // }, [selectedColor]);

  /* TYPE FILTER STUFF */

  // state variable
  const [selectedClothing, setSelectedClothing] = useState(0);

  /**
   * Sets menu's selected type to input type,
   * and sets global filter type to input type.
   * Not used by menu, but is passed to OptionText
   * @param
   */
  const changeSelectedClothing = (clothing) => {
    // console.log('changeSelectedClothing input:' + clothing);
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
              <View style={styles.optionsContainer}>
                <OptionText
                  selection={colorKey.black}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Black
                </OptionText>
                <OptionText
                  selection={colorKey.white}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  White
                </OptionText>
                <OptionText
                  selection={colorKey.grey}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Grey
                </OptionText>
                <OptionText
                  selection={colorKey.red}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Red
                </OptionText>
                <OptionText
                  selection={colorKey.orange}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Orange
                </OptionText>
                <OptionText
                  selection={colorKey.yellow}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Yellow
                </OptionText>
                <OptionText
                  selection={colorKey.green}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Green
                </OptionText>
                <OptionText
                  selection={colorKey.blue}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Blue
                </OptionText>
                <OptionText
                  selection={colorKey.purple}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Purple
                </OptionText>
                <OptionText
                  selection={colorKey.multicolored}
                  filterSelection={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Multicolored
                </OptionText>
              </View>
            </View>
            <View style={styles.clothingContainer}>
              <View style={styles.categoriesHeader}>
                <Icon name="circle" size={18} color={'white'} />
                <Text style={styles.categoriesText}>Clothing</Text>
              </View>
              <View style={styles.optionsContainer}>
                <OptionText
                  selection={typeKey.outerwear}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Outerwear
                </OptionText>
                <OptionText
                  selection={typeKey.formalwear}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Formal Wear
                </OptionText>
                <OptionText
                  selection={typeKey.sweaters}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Sweaters
                </OptionText>
                <OptionText
                  selection={typeKey.hoodies}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Hoodies
                </OptionText>
                <OptionText
                  selection={typeKey.buttonUps}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Button Ups
                </OptionText>
                <OptionText
                  selection={typeKey.tees}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Tees
                </OptionText>
                <OptionText
                  selection={typeKey.pants}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Pants
                </OptionText>
                <OptionText
                  selection={typeKey.shorts}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Shorts
                </OptionText>
                <OptionText
                  selection={typeKey.activeWear}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Activewear
                </OptionText>
                <OptionText
                  selection={typeKey.shoes}
                  filterSelection={selectedClothing}
                  noneKey={typeKey.none}
                  onSelect={changeSelectedClothing}>
                  Shoes
                </OptionText>
              </View>
            </View>
            <View style={styles.doneContainer}>
              <TouchableOpacity
                onPress={props.onClose}
                style={styles.doneButton}>
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={props.onClose}>
          <View style={styles.nonMenuArea} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  menuScreen: {
    flexDirection: 'row',
    flex: 1,
    // if android, can use StatusBar.currentHeight
    // else, for iOS, has to be set manually to 20
    // PROBLEM: dealing with android's with notches
    // and iPhone's w/o notches
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  menuArea: {
    backgroundColor: EST_ORANGE_TRANSP,
    flex: 9,
    color: 'white',
    // only looks good on iPhones w/notches
    paddingTop: Platform.OS === 'android' ? 0 : 45,
    paddingBottom: Platform.OS === 'android' ? 0 : 10,
  },
  menuHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    //height: '8%',
    flex: 8,
  },
  filtersTitle: {
    color: 'white',
    paddingTop: '3%',
    paddingLeft: '5%',
    fontWeight: 'bold',
    fontSize: 30,
  },
  menuBody: {
    paddingTop: '5%',
    paddingLeft: '5%',
    flex: 100,
  },
  colorsContainer: {
    flexGrow: 1,
  },
  categoriesHeader: {
    flexDirection: 'row',
  },
  clothingContainer: {
    flexGrow: 1,
  },
  optionsContainer: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    paddingLeft: '20%',
  },
  categoriesText: {
    paddingLeft: 5,
    color: 'white',
    fontSize: 16,
  },
  doneContainer: {
    paddingBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  doneButton: {
    //borderWidth: 1,
    width: 50,
    alignItems: 'center',
  },
  doneText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  nonMenuArea: {
    flex: 4,
  },
});

export default Menu;
