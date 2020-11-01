import React from 'react';
import {View} from 'react-native';
import TypeOption from './TypeOption';
import typeKey from '../../../util/typeKey';

/**
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
        text={'Outerwear'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.formalwear}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Formal Wear'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.sweaters}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Sweaters'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.hoodies}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Hoodies'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.buttonUps}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Button Ups'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.tees}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Tees'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.pants}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Pants'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.shorts}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Shorts'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.activeWear}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Activewear'}
        onSelect={props.selectType}
      />
      <TypeOption
        type={typeKey.shoes}
        currentType={props.currentType}
        noneKey={typeKey.none}
        text={'Shoes'}
        onSelect={props.selectType}
      />
    </View>
  );
};

export default TypeChoices;
