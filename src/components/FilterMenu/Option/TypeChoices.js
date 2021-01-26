import React from 'react';
import {View} from 'react-native';
import TypeOption from './TypeOption';
import typeKey from '../../../util/typeKey';

/**
 * @function TypeChoices
 * @param {*} props
 * @param {object} props.style
 * @param {number} props.currentType
 * @param {func} props.selectType
 */

const TypeChoices = (props) => {
  return (
    <View style={props.style}>
      <TypeOption
        type={typeKey.outerwear}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.outerwear}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.formalwear}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.formalwear}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.sweaters}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.sweaters}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.hoodies}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.hoodies}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.buttonUps}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.buttonUps}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.tees}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.tees}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.pants}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.pants}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.shorts}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.shorts}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.activewear}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.activewear}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.shoes}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={typeKey.shoes}
        onSelect={props.selectType}
      />
    </View>
  );
};

export default TypeChoices;
