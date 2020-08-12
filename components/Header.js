import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// TO-DO: Create Filter menu

const EST_ORANGE = 'rgb(227, 131, 4)';
// const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.8)';
const HEADER_BUTTON_SIZE = 35;

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.menuButton}>
        <Icon
          name="menu"
          size={HEADER_BUTTON_SIZE}
          color={EST_ORANGE}
          onPress={props.onPressMenu}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>My Closet</Text>
      </View>
      <Menu style={styles.addButton}>
        <MenuTrigger customStyles={triggerStyles}>
          <Icon name="plus" size={HEADER_BUTTON_SIZE} color={EST_ORANGE} />
        </MenuTrigger>
        <MenuOptions customStyles={optionsStyles}>
          <MenuOption value={1} text="Take photo" />
          <MenuOption value={2} text="Import..." />
        </MenuOptions>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    // main direction, (which justifyContent works on)
    // is horizontal
    justifyContent: 'center',
    // cross-direction, (which alignItems works on)
    //  is vertical
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: '7%',
    flex: 0,
  },
  menuButton: {
    left: -110,
  },
  titleContainer: {
    alignContent: 'center',
  },
  titleText: {
    fontSize: 17,
  },
  addButton: {
    right: -110,
  },
  addMenu: {
    backgroundColor: 'lightgray',
    margin: 50,
  },
});

const optionsStyles = {
  optionsContainer: {
    padding: 1,
  },
  optionsWrapper: {},
};

const triggerStyles = {
  // DOESNT WORK ON ANDROID
  /*
    triggerOuterWrapper: {
        bottom: -30, // eqaul to triggerWrapper.bottom * -1
        right: -50,
    },
    triggerWrapper: {
        bottom: 30, // equal to triggerOuterWrapper.bottom * -1
        right: 50,
    },
    */
};

export default Header;
