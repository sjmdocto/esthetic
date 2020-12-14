import React from 'react';
import FilterMenu from './FilterMenu';
import {render, fireEvent} from 'react-native-testing-library';

describe('FilterMenu test suite:', () => {
  const mockOnClose = jest.fn().mockName('onClose');
  const mockSetFilterColor = jest.fn().mockName('setFilterColor');
  const mockSetFilterType = jest.fn().mockName('setFilterType');

  test('Done button is functional.', () => {
    const {getByLabelText} = render(
      <FilterMenu visible={true} onClose={mockOnClose} />,
    );
    fireEvent.press(getByLabelText('Done button'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('Pressing outside of filterMenu calls onClose.', () => {
    const {getByLabelText} = render(
      <FilterMenu visible={true} onClose={mockOnClose} />,
    );
    fireEvent.press(getByLabelText('Outside of Filter Menu area'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('Color Filter buttons are functional.', () => {
    const {getByLabelText} = render(
      <FilterMenu visible={true} setFilterColor={mockSetFilterColor} />,
    );
    fireEvent.press(getByLabelText('Blue filter button'));
    expect(mockSetFilterColor).toHaveBeenCalled();
  });

  test('Type Filter buttons are functional.', () => {
    const {getByLabelText} = render(
      <FilterMenu visible={true} setFilterType={mockSetFilterType} />,
    );
    fireEvent.press(getByLabelText('Hoodies filter button'));
    expect(mockSetFilterType).toHaveBeenCalled();
  });

  test('FilterMenu renders properly.', () => {
    const {toJSON} = render(<FilterMenu visible={true} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
