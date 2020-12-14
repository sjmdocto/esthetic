import React from 'react';
import Option from './Option';

/**
 * Wrapper for Option component
 * @function ColorOption
 * @param {*} props
 * @param {number} props.color - this color's key
 * @param {number} props.currentColor - currently selected color in Menu
 * @param {number} props.noneKey - 0
 * @param {string} props.text
 * @param {func} props.onSelect - changeSelectedColor()
 */

const ColorOption = (props) => {
  return (
    <Option
      selection={props.color}
      currentSelection={props.currentColor}
      noneKey={props.noneKey}
      text={props.text}
      onSelect={props.onSelect}
    />
  );
};

export default ColorOption;
