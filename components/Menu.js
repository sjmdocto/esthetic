import React from 'react';
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

const Menu = (props) => {
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
                <Icon name="triangle" size={18} color={'white'} />
                <Text style={styles.categoriesText}>Colors</Text>
              </View>
              <View style={styles.optionsContainer}>
                <OptionText>Black</OptionText>
                <OptionText>White</OptionText>
                <OptionText>Grey</OptionText>
                <OptionText>Red</OptionText>
                <OptionText>Orange</OptionText>
                <OptionText>Yellow</OptionText>
                <OptionText>Green</OptionText>
                <OptionText>Blue</OptionText>
                <OptionText>Purple</OptionText>
                <OptionText>Multicolored</OptionText>
              </View>
            </View>
            <View style={styles.clothingContainer}>
              <View style={styles.categoriesHeader}>
                <Icon name="triangle" size={18} color={'white'} />
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
