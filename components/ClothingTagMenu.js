import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Feather';

const clothingKey = {
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

const ClothingTagMenu = (props) => {
  const [clothingSelect, setClothingSelect] = useState(clothingKey.outerwear);
  const clothingSelectHandler = (clothing) => {
    setClothingSelect(clothing);
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
          text={clothingKey.outerwear}
          onSelect={clothingSelectHandler.bind(this, clothingKey.outerwear)}
        />
        <MenuOption
          value={2}
          text={clothingKey.formalwear}
          onSelect={clothingSelectHandler.bind(this, clothingKey.formalwear)}
        />
        <MenuOption
          value={3}
          text={clothingKey.sweaters}
          onSelect={clothingSelectHandler.bind(this, clothingKey.sweaters)}
        />
        <MenuOption
          value={4}
          text={clothingKey.hoodies}
          onSelect={clothingSelectHandler.bind(this, clothingKey.hoodies)}
        />
        <MenuOption
          value={5}
          text={clothingKey.buttonUps}
          onSelect={clothingSelectHandler.bind(this, clothingKey.buttonUps)}
        />
        <MenuOption
          value={6}
          text={clothingKey.tees}
          onSelect={clothingSelectHandler.bind(this, clothingKey.tees)}
        />
        <MenuOption
          value={7}
          text={clothingKey.pants}
          onSelect={clothingSelectHandler.bind(this, clothingKey.pants)}
        />
        <MenuOption
          value={8}
          text={clothingKey.shorts}
          onSelect={clothingSelectHandler.bind(this, clothingKey.shorts)}
        />
        <MenuOption
          value={9}
          text={clothingKey.activeWear}
          onSelect={clothingSelectHandler.bind(this, clothingKey.activeWear)}
        />
        <MenuOption
          value={10}
          text={clothingKey.shoes}
          onSelect={clothingSelectHandler.bind(this, clothingKey.shoes)}
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
