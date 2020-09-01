import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';

const colorTag = {
  black: 'Black',
  white: 'White',
  grey: 'Grey',
  red: 'Red',
  orange: 'Orange',
  yellow: 'Yellow',
  green: 'Green',
  blue: 'Blue',
  purple: 'Purple',
  multicolored: 'Multicolored',
};

// TO-DO: Avoid code duplication. Move this to App.js, since it is used by Menu too
const colorKey = {
  //none: 0,
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

/**
 * Popup menu for selecting color tag, called by SavePhoto.js
 * @param {*} props
 * @param {func} setColorTag
 */

const ColorTagMenu = (props) => {
  //state variable for currently selected color from menu
  const [colorSelect, setColorSelect] = useState(colorTag.black);

  /**
   * Helper function for clothingSelectHandler
   *
   * Sets the color tag in SavePhoto
   * @param {string} tag
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
   * @param {string} tag
   */
  const colorSelectHandler = (color) => {
    setColorSelect(color);
    tagToKey(color);
  };

  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.tagSelector}>
          <Icon name={'tag'} size={14} color={'black'} style={{right: 5}} />
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
          text={colorTag.red}
          onSelect={colorSelectHandler.bind(this, colorTag.red)}
        />
        <MenuOption
          value={5}
          text={colorTag.orange}
          onSelect={colorSelectHandler.bind(this, colorTag.orange)}
        />
        <MenuOption
          value={6}
          text={colorTag.yellow}
          onSelect={colorSelectHandler.bind(this, colorTag.yellow)}
        />
        <MenuOption
          value={7}
          text={colorTag.green}
          onSelect={colorSelectHandler.bind(this, colorTag.green)}
        />
        <MenuOption
          value={8}
          text={colorTag.blue}
          onSelect={colorSelectHandler.bind(this, colorTag.blue)}
        />
        <MenuOption
          value={9}
          text={colorTag.purple}
          onSelect={colorSelectHandler.bind(this, colorTag.purple)}
        />
        <MenuOption
          value={10}
          text={colorTag.multicolored}
          onSelect={colorSelectHandler.bind(this, colorTag.multicolored)}
        />
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  tagSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 9,
  },
});

export default ColorTagMenu;
