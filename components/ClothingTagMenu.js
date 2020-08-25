import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';

const typeTag = {
  outerwear: 'Outerwear',
  formalwear: 'Formal Wear',
  sweaters: 'Sweaters',
  hoodies: 'Hoodies',
  buttonUps: 'Button Ups',
  tees: 'Tees',
  pants: 'Pants',
  shorts: 'Shorts',
  activeWear: 'Activewear',
  shoes: 'Shoes',
};

// TO-DO: Avoid code duplication. Move this to App.js, since it is used by Menu too
const typeKey = {
  // none: 0,
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

/**
 * Popup menu for selecting type tag, called by SavePhoto.js
 * @param {*} props
 * @param {func} setTypeTag
 */

const ClothingTagMenu = (props) => {
  // state variable for currently selected clothing type from menu
  const [clothingSelect, setClothingSelect] = useState(typeTag.outerwear);

  /**
   * Helper function for clothingSelectHandler
   *
   * Set the type tag in SavePhoto
   * @param {string} tag
   */
  const tagToKey = (tag) => {
    switch (tag) {
      case 'Outerwear':
        props.setTypeTag(typeKey.outerwear);
        break;
      case 'Formal Wear':
        props.setTypeTag(typeKey.formalwear);
        break;
      case 'Sweaters':
        props.setTypeTag(typeKey.sweaters);
        break;
      case 'Hoodies':
        props.setTypeTag(typeKey.hoodies);
        break;
      case 'Button Ups':
        props.setTypeTag(typeKey.buttonUps);
        break;
      case 'Tees':
        props.setTypeTag(typeKey.tees);
        break;
      case 'Pants':
        props.setTypeTag(typeKey.pants);
        break;
      case 'Shorts':
        props.setTypeTag(typeKey.shorts);
        break;
      case 'Activewear':
        props.setTypeTag(typeKey.activeWear);
        break;
      case 'Shoes':
        props.setTypeTag(typeKey.shoes);
        break;
      default:
        console.warn('tagToKey error');
        break;
    }
  };

  /**
   * Handler for selecting a type tag from the menu
   * @param {string} tag
   */
  const clothingSelectHandler = (clothing) => {
    setClothingSelect(clothing);
    tagToKey(clothing);
    console.log(clothingSelect);
  };
  return (
    <Menu>
      <MenuTrigger>
        <View style={styles.tagSelector}>
          <Icon name={'tag'} size={14} color={'black'} style={{right: 5}} />
          <Text>{clothingSelect}</Text>
        </View>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          value={1}
          text={typeTag.outerwear}
          onSelect={clothingSelectHandler.bind(this, typeTag.outerwear)}
        />
        <MenuOption
          value={2}
          text={typeTag.formalwear}
          onSelect={clothingSelectHandler.bind(this, typeTag.formalwear)}
        />
        <MenuOption
          value={3}
          text={typeTag.sweaters}
          onSelect={clothingSelectHandler.bind(this, typeTag.sweaters)}
        />
        <MenuOption
          value={4}
          text={typeTag.hoodies}
          onSelect={clothingSelectHandler.bind(this, typeTag.hoodies)}
        />
        <MenuOption
          value={5}
          text={typeTag.buttonUps}
          onSelect={clothingSelectHandler.bind(this, typeTag.buttonUps)}
        />
        <MenuOption
          value={6}
          text={typeTag.tees}
          onSelect={clothingSelectHandler.bind(this, typeTag.tees)}
        />
        <MenuOption
          value={7}
          text={typeTag.pants}
          onSelect={clothingSelectHandler.bind(this, typeTag.pants)}
        />
        <MenuOption
          value={8}
          text={typeTag.shorts}
          onSelect={clothingSelectHandler.bind(this, typeTag.shorts)}
        />
        <MenuOption
          value={9}
          text={typeTag.activeWear}
          onSelect={clothingSelectHandler.bind(this, typeTag.activeWear)}
        />
        <MenuOption
          value={10}
          text={typeTag.shoes}
          onSelect={clothingSelectHandler.bind(this, typeTag.shoes)}
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

export default ClothingTagMenu;
