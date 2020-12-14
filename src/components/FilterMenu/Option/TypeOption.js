import React from 'react';
import Option from './Option';

/**
 * Wrapper for Option component
 * @function TypeOption
 * @param {*} props
 * @param {number} props.type - this color's key
 * @param {number} props.currentType - currently selected color in Menu
 * @param {number} props.noneKey - 0
 * @param {string} props.text
 * @param {func} props.onSelect - changeSelectedType()
 */

const TypeOption = (props) => {
  return (
    <Option
      selection={props.type}
      currentSelection={props.currentType}
      noneKey={props.noneKey}
      text={props.text}
      onSelect={props.onSelect}
    />
  );
};

export default TypeOption;
