import React from 'react';
import Grid from './Grid';
import colorKey from '../../util/colorKey';
import typeKey from '../../util/typeKey';
import {render, fireEvent} from 'react-native-testing-library';

describe('Grid test suite:', () => {
  test('If closet is empty, no grid tiles are created.', () => {
    const emptyCloset = [];
    const {toJSON} = render(
      <Grid
        closet={emptyCloset}
        filterColor={colorKey.none}
        filterType={typeKey.none}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('If closet is not empty, then grid tiles are created.', () => {
    const testCloset = [
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 1,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 2,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.pants,
        key: 3,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.pants,
        key: 4,
      },
    ];
    const {toJSON} = render(
      <Grid
        closet={testCloset}
        filterColor={colorKey.none}
        filterType={typeKey.none}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('Delete button is functional.', () => {
    const testCloset = [
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 1,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.outerwear,
        key: 2,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.pants,
        key: 3,
      },
      {
        photo: 'base64',
        colorTag: colorKey.black,
        typeTag: typeKey.pants,
        key: 4,
      },
    ];
    const mockOnDelete = jest.fn().mockName('onDelete');
    const {getByLabelText} = render(
      <Grid
        closet={testCloset}
        filterColor={colorKey.none}
        filterType={typeKey.none}
        onDelete={mockOnDelete}
      />,
    );
    fireEvent.press(getByLabelText('Delete button'));
    expect(mockOnDelete).toHaveBeenCalled();
  });
});
