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

const Menu = (props) => {
  const [selectedColor, setselectedColor] = useState(0);
  const changeSelectedColor = (color) => {
    console.log('changeSelectedColor input:' + color);
    setselectedColor(color);
  };
  useEffect(() => {
    console.log('selectedColor is now:' + selectedColor);
  }, [selectedColor]);
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
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Black
                </OptionText>
                <OptionText
                  selection={colorKey.white}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  White
                </OptionText>
                <OptionText
                  selection={colorKey.grey}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Grey
                </OptionText>
                <OptionText
                  selection={colorKey.red}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Red
                </OptionText>
                <OptionText
                  selection={colorKey.orange}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Orange
                </OptionText>
                <OptionText
                  selection={colorKey.yellow}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Yellow
                </OptionText>
                <OptionText
                  selection={colorKey.green}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Green
                </OptionText>
                <OptionText
                  selection={colorKey.blue}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Blue
                </OptionText>
                <OptionText
                  selection={colorKey.purple}
                  selectedOption={selectedColor}
                  noneKey={colorKey.none}
                  onSelect={changeSelectedColor}>
                  Purple
                </OptionText>
                <OptionText
                  selection={colorKey.multicolored}
                  selectedOption={selectedColor}
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
                <OptionText>Outerwear</OptionText>
                <OptionText>Formal Wear</OptionText>
                <OptionText>Sweaters</OptionText>
                <OptionText>Hoodies</OptionText>
                <OptionText>Button Ups</OptionText>
                <OptionText>Tees</OptionText>
                <OptionText>Pants</OptionText>
                <OptionText>Shorts</OptionText>
                <OptionText>Activewear</OptionText>
                <OptionText>Shoes</OptionText>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  menuArea: {
    backgroundColor: EST_ORANGE_TRANSP,
    flex: 9,
    color: 'white',
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
    //flex: 1,
  },
  categoriesHeader: {
    flexDirection: 'row',
  },
  clothingContainer: {
    flexGrow: 1,
    //flex: 1,
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
