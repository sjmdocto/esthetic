import React from 'react';
import {View} from 'react-native';
import ColorOption from './ColorOption';
import colorKey from '../../../util/colorKey';

/**
 * @function ColorChoices
 * @param {*} props
 * @param {object} props.style
 * @param {number} props.currentColor
 * @param {func} props.selectColor
 */

const ColorChoices = (props) => {
  return (
    <View style={props.style}>
      <ColorOption
        color={colorKey.black}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.black}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.white}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.white}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.grey}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.grey}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.brown}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.brown}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.red}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.red}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.orange}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.orange}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.yellow}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.yellow}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.green}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.green}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.blue}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.blue}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.purple}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.purple}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.pink}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.pink}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.multicolored}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={colorKey.multicolored}
        onSelect={props.selectColor}
      />
    </View>
  );
};

export default ColorChoices;
