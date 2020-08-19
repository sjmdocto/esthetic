import React, {useState, useEffect} from 'react';
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
const clothingKey = {
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

const Menu = (props) => {
  // Color filter stuff
  const [selectedColor, setselectedColor] = useState(0);
  const changeSelectedColor = (color) => {
    console.log('changeSelectedColor input:' + color);
    setselectedColor(color);
    props.setFilterColor(color);
  };

  useEffect(() => {
    console.log('selectedColor is now:' + selectedColor);
  }, [selectedColor]);

  // Clothing type filter stuff
  const [selectedClothing, setSelectedClothing] = useState(0);
  const changeSelectedClothing = (clothing) => {
    console.log('changeSelectedClothing input:' + clothing);
    setSelectedClothing(clothing);
    props.setFilterType(clothing);
  };

  useEffect(() => {
    console.log('selectedClothing is now:' + selectedClothing);
  }, [selectedClothing]);

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
                  selection={clothingKey.outerwear}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Outerwear
                </OptionText>
                <OptionText
                  selection={clothingKey.formalwear}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Formal Wear
                </OptionText>
                <OptionText
                  selection={clothingKey.sweaters}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Sweaters
                </OptionText>
                <OptionText
                  selection={clothingKey.hoodies}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Hoodies
                </OptionText>
                <OptionText
                  selection={clothingKey.buttonUps}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Button Ups
                </OptionText>
                <OptionText
                  selection={clothingKey.tees}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Tees
                </OptionText>
                <OptionText
                  selection={clothingKey.pants}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Pants
                </OptionText>
                <OptionText
                  selection={clothingKey.shorts}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Shorts
                </OptionText>
                <OptionText
                  selection={clothingKey.activeWear}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
                  onSelect={changeSelectedClothing}>
                  Activewear
                </OptionText>
                <OptionText
                  selection={clothingKey.shoes}
                  filterSelection={selectedClothing}
                  noneKey={clothingKey.none}
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
