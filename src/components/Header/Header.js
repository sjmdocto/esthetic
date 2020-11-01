import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {
  HEADER_BUTTON_SIZE,
  styles,
  optionsStyles,
  triggerStyles,
} from './Header.style';
import theme from '../../styles/theme.style';

/**
 * Contains Menu button, title, Add button, and TakePhoto screen modal
 * @param {*} props
 * @param {func} props.openFilterMenu
 * @param {func} props.openCamera
 */
const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.menuButton}>
        <Icon
          name="menu"
          size={HEADER_BUTTON_SIZE}
          color={theme.EST_ORANGE}
          onPress={props.openFilterMenu}
          accessible={true}
          accessibilityLabel={'Menu button'}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>My Closet</Text>
      </View>
      <Menu style={styles.addButton}>
        <MenuTrigger
          customStyles={triggerStyles}
          accessible={true}
          accessibilityLabel={'Add to closet button'}>
          <Icon
            name="plus"
            size={HEADER_BUTTON_SIZE}
            color={theme.EST_ORANGE}
          />
        </MenuTrigger>
        <MenuOptions customStyles={optionsStyles}>
          <MenuOption value={1} onSelect={props.openCamera} text="Take photo" />
          <MenuOption value={2} text="Import..." />
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default Header;
