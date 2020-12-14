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
        text={'Black'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.white}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'White'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.grey}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Grey'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.red}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Red'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.orange}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Orange'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.yellow}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Yellow'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.green}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Green'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.blue}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Blue'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.purple}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Purple'}
        onSelect={props.selectColor}
      />
      <ColorOption
        color={colorKey.multicolored}
        currentColor={props.currentColor}
        noneKey={colorKey.none}
        text={'Multicolored'}
        onSelect={props.selectColor}
      />
    </View>
  );
};

export default ColorChoices;
