import React from 'react';
import Grid from './Grid';
import {render} from 'react-native-testing-library';

describe('Grid test suite:', () => {
  test('If closet is empty, no grid tiles are created.', () => {
    const emptyCloset = [];

    const {toJSON} = render(
      <Grid closet={emptyCloset} filterColor={0} filterType={0} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('If closet is not empty, then grid tiles are created.', () => {
    const testCloset = [
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 1},
      {photo: 'base64', colorTag: 1, typeTag: 1, key: 2},
      {photo: 'base64', colorTag: 1, typeTag: 2, key: 3},
      {photo: 'base64', colorTag: 1, typeTag: 2, key: 4},
    ];
    const {toJSON} = render(
      <Grid closet={testCloset} filterColor={0} filterType={0} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  // BUG: accessibility labels created within FlatList.renderItem() don't appear
  // test('Can delete items from closet.', () => {
  //   const {toJSON, getByLabelText} = render(
  //     <Grid closet={smallTestCloset} filterColor={0} filterType={0} />,
  //   );
  //   fireEvent.press(getByLabelText('Closet item')); // press first closet item
  //   // fireEvent.press(getByLabelText('Delete item from closet'));
  //   // expect deleteFromCloset() to have been called
  //   expect(toJSON()).toMatchSnapshot();
  // });
});
