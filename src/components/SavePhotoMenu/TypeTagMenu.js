import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';
import typeKey from '../../util/typeKey';
import {styles} from './TagMenu.style';

/**
 * Popup menu for selecting type tag, called by SavePhotoMenu
 * @function TypeTagMenu
 * @param {*} props
 * @param {func} props.setTypeTag
 * @param {string} props.typeTag
 */

const TypeTagMenu = (props) => {
  const [typeSelect, setTypeSelect] = useState(typeKey.outerwear);

  useEffect(() => {
    setTypeSelect(props.typeTag);
  }, [props.typeTag]);

  /**
   * Handler for selecting a type tag from the menu
   * @function typeSelectHandler
   * @param {string} type
   * @returns {void}
   */
  const typeSelectHandler = (type) => {
    props.setTypeTag(type);
    setTypeSelect(type);
  };

  return (
    <Menu>
      <MenuTrigger>
        <View
          style={styles.tagSelector}
          accessible={true}
          accessibilityLabel={'Select clothing type tag'}>
          <Icon name={'tag'} size={14} color={'black'} style={styles.icon} />
          <Text>{typeSelect}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          value={1}
          text={typeKey.outerwear}
          onSelect={typeSelectHandler.bind(this, typeKey.outerwear)}
        />
        <MenuOption
          value={2}
          text={typeKey.formalwear}
          onSelect={typeSelectHandler.bind(this, typeKey.formalwear)}
        />
        <MenuOption
          value={3}
          text={typeKey.sweaters}
          onSelect={typeSelectHandler.bind(this, typeKey.sweaters)}
        />
        <MenuOption
          value={4}
          text={typeKey.hoodies}
          onSelect={typeSelectHandler.bind(this, typeKey.hoodies)}
        />
        <MenuOption
          value={5}
          text={typeKey.buttonUps}
          onSelect={typeSelectHandler.bind(this, typeKey.buttonUps)}
        />
        <MenuOption
          value={6}
          text={typeKey.tees}
          onSelect={typeSelectHandler.bind(this, typeKey.tees)}
        />
        <MenuOption
          value={7}
          text={typeKey.pants}
          onSelect={typeSelectHandler.bind(this, typeKey.pants)}
        />
        <MenuOption
          value={8}
          text={typeKey.shorts}
          onSelect={typeSelectHandler.bind(this, typeKey.shorts)}
        />
        <MenuOption
          value={9}
          text={typeKey.activewear}
          onSelect={typeSelectHandler.bind(this, typeKey.activewear)}
        />
        <MenuOption
          value={10}
          text={typeKey.shoes}
          onSelect={typeSelectHandler.bind(this, typeKey.shoes)}
        />
      </MenuOptions>
    </Menu>
  );
};

export default TypeTagMenu;
