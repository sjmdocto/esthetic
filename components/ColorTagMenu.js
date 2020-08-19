import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';

const colorKey = {
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

const ColorTagMenu = (props) => {
  const [colorSelect, setColorSelect] = useState(colorKey.black);
  const colorSelectHandler = (color) => {
    setColorSelect(color);
    console.log(colorSelect);
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
          text={colorKey.red}
          onSelect={colorSelectHandler.bind(this, colorKey.red)}
        />
        <MenuOption
          value={5}
          text={colorKey.orange}
          onSelect={colorSelectHandler.bind(this, colorKey.orange)}
        />
        <MenuOption
          value={6}
          text={colorKey.yellow}
          onSelect={colorSelectHandler.bind(this, colorKey.yellow)}
        />
        <MenuOption
          value={7}
          text={colorKey.green}
          onSelect={colorSelectHandler.bind(this, colorKey.green)}
        />
        <MenuOption
          value={8}
          text={colorKey.blue}
          onSelect={colorSelectHandler.bind(this, colorKey.blue)}
        />
        <MenuOption
          value={9}
          text={colorKey.purple}
          onSelect={colorSelectHandler.bind(this, colorKey.purple)}
        />
        <MenuOption
          value={10}
          text={colorKey.multicolored}
          onSelect={colorSelectHandler.bind(this, colorKey.multicolored)}
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
