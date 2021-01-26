import React, {useState, useEffect} from 'react';
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

/**
 * Popup menu for selecting color tag, called by SavePhotoMenu
 * @function ColorTagMenu
 * @param {*} props
 * @param {func} props.setColorTag
 * @param {number} props.colorTag
 */

const ColorTagMenu = (props) => {
  const [colorSelect, setColorSelect] = useState(colorKey.black);

  useEffect(() => {
    setColorSelect(props.colorTag);
  }, [props.colorTag]);

  /**
   * Handler for selecting a color tag from the menu
   * @function colorSelectHandler
   * @param {string} color
   * @returns {void}
   */
  const colorSelectHandler = (color) => {
    props.setColorTag(color);
    setColorSelect(color);
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
          text={colorKey.black}
          onSelect={colorSelectHandler.bind(this, colorKey.black)}
        />
        <MenuOption
          value={2}
          text={colorKey.white}
          onSelect={colorSelectHandler.bind(this, colorKey.white)}
        />
        <MenuOption
          value={3}
          text={colorKey.grey}
          onSelect={colorSelectHandler.bind(this, colorKey.grey)}
        />
        <MenuOption
          value={4}
          text={colorKey.brown}
          onSelect={colorSelectHandler.bind(this, colorKey.brown)}
        />
        <MenuOption
          value={5}
          text={colorKey.red}
          onSelect={colorSelectHandler.bind(this, colorKey.red)}
        />
        <MenuOption
          value={6}
          text={colorKey.orange}
          onSelect={colorSelectHandler.bind(this, colorKey.orange)}
        />
        <MenuOption
          value={7}
          text={colorKey.yellow}
          onSelect={colorSelectHandler.bind(this, colorKey.yellow)}
        />
        <MenuOption
          value={8}
          text={colorKey.green}
          onSelect={colorSelectHandler.bind(this, colorKey.green)}
        />
        <MenuOption
          value={9}
          text={colorKey.blue}
          onSelect={colorSelectHandler.bind(this, colorKey.blue)}
        />
        <MenuOption
          value={10}
          text={colorKey.purple}
          onSelect={colorSelectHandler.bind(this, colorKey.purple)}
        />
        <MenuOption
          value={11}
          text={colorKey.pink}
          onSelect={colorSelectHandler.bind(this, colorKey.pink)}
        />
        <MenuOption
          value={12}
          text={colorKey.multicolored}
          onSelect={colorSelectHandler.bind(this, colorKey.multicolored)}
        />
      </MenuOptions>
    </Menu>
  );
};

export default ColorTagMenu;
