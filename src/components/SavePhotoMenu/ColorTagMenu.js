import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';
import colorKey from '../../util/colorKey';
import {styles} from './TagMenu.style';

const colorTag = {
  black: 'Black',
  white: 'White',
  grey: 'Grey',
  brown: 'Brown',
  red: 'Red',
  orange: 'Orange',
  yellow: 'Yellow',
  green: 'Green',
  blue: 'Blue',
  purple: 'Purple',
  pink: 'Pink',
  multicolored: 'Multicolored',
};

/**
 * Popup menu for selecting color tag, called by SavePhotoMenu
 * @function ColorTagMenu
 * @param {*} props
 * @param {func} props.setColorTag
 */

const ColorTagMenu = (props) => {
  const [colorSelect, setColorSelect] = useState(colorTag.black);
  /**
   * Helper function for clothingSelectHandler.
   * @function tagToKey
   * @param {string} tag
   * @returns {void}
   */
  const tagToKey = (tag) => {
    switch (tag) {
      case 'Black':
        props.setColorTag(colorKey.black);
        break;
      case 'White':
        props.setColorTag(colorKey.white);
        break;
      case 'Grey':
        props.setColorTag(colorKey.grey);
        break;
      case 'Brown':
        props.setColorTag(colorKey.brown);
        break;
      case 'Red':
        props.setColorTag(colorKey.red);
        break;
      case 'Orange':
        props.setColorTag(colorKey.orange);
        break;
      case 'Yellow':
        props.setColorTag(colorKey.yellow);
        break;
      case 'Green':
        props.setColorTag(colorKey.green);
        break;
      case 'Blue':
        props.setColorTag(colorKey.blue);
        break;
      case 'Purple':
        props.setColorTag(colorKey.purple);
        break;
      case 'Pink':
        props.setColorTag(colorKey.pink);
        break;
      case 'Multicolored':
        props.setColorTag(colorKey.multicolored);
        break;
      default:
        console.warn('tagToKey error');
        break;
    }
  };
  /**
   * Handler for selecting a color tag from the menu
   * @function colorSelectHandler
   * @param {string} color
   * @returns {void}
   */
  const colorSelectHandler = (color) => {
    setColorSelect(color);
    tagToKey(color);
  };

  return (
    <Menu>
      <MenuTrigger
        customStyles={{triggerTouchable: {testID: 'ColorTagMenu-trigger'}}}>
        <View
          style={styles.tagSelector}
          accessible={true}
          accessibilityLabel={'Select color tag'}>
          <Icon name={'tag'} size={14} color={'black'} style={styles.icon} />
          <Text>{colorSelect}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          value={1}
          text={colorTag.black}
          onSelect={colorSelectHandler.bind(this, colorTag.black)}
        />
        <MenuOption
          value={2}
          text={colorTag.white}
          onSelect={colorSelectHandler.bind(this, colorTag.white)}
        />
        <MenuOption
          value={3}
          text={colorTag.grey}
          onSelect={colorSelectHandler.bind(this, colorTag.grey)}
        />
        <MenuOption
          value={4}
          text={colorTag.brown}
          onSelect={colorSelectHandler.bind(this, colorTag.brown)}
        />
        <MenuOption
          value={5}
          text={colorTag.red}
          onSelect={colorSelectHandler.bind(this, colorTag.red)}
        />
        <MenuOption
          value={6}
          text={colorTag.orange}
          onSelect={colorSelectHandler.bind(this, colorTag.orange)}
        />
        <MenuOption
          value={7}
          text={colorTag.yellow}
          onSelect={colorSelectHandler.bind(this, colorTag.yellow)}
        />
        <MenuOption
          value={8}
          text={colorTag.green}
          onSelect={colorSelectHandler.bind(this, colorTag.green)}
        />
        <MenuOption
          value={9}
          text={colorTag.blue}
          onSelect={colorSelectHandler.bind(this, colorTag.blue)}
        />
        <MenuOption
          value={10}
          text={colorTag.purple}
          onSelect={colorSelectHandler.bind(this, colorTag.purple)}
        />
        <MenuOption
          value={11}
          text={colorTag.pink}
          onSelect={colorSelectHandler.bind(this, colorTag.pink)}
        />
        <MenuOption
          value={12}
          text={colorTag.multicolored}
          onSelect={colorSelectHandler.bind(this, colorTag.multicolored)}
        />
      </MenuOptions>
    </Menu>
  );
};

export default ColorTagMenu;
