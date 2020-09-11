import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

/*
NOTE: If all the item tiles fit on screen,
the grid does not scroll on Android.
Basically, scrolling capability only works
if it's actually needed on Android.
*/

// GLOBAL CONSTANTS
const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;
const numColumns = 3;
const EMPTY_WARDROBE = {photo: null, colorTag: null, typeTag: null};

// To-do: Fix tile size when there aren't 3 items per row

/**
 * Holds clothing item grid
 * @param {*} props
 * @param {array} props.wardrobe - all saved clothing items
 * @param {number} props.filterColor
 * @param {number} props.filterType
 * @param {function} props.onRemove
 */

const Body = (props) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const [selectionKey, setSelectionKey] = useState('');

  const onSelect = (key) => {
    setSelectionKey(key);
    setDetailVisible(true);
  };

  const onDelete = () => {
    // 1) Delete item
    //    a) Delete from wardrobe
    //    b) Delete from AsyncStorage
    props.onRemove(selectionKey);
    // 2) Hide detail view
    setDetailVisible(false);
  };

  /**
   * Filters wardrobe by the currently selected color and type filters
   * @param {items} - wardrobe
   * @param {filterColor}
   * @param {filterType}
   * @return {array} - the filtered wardrobe
   */
  const filterItems = (wardrobe, filterColor, filterType) => {
    // 0) Wardrobe is empty
    if (wardrobe === undefined) {
      return EMPTY_WARDROBE;
    }
    // 1) No color filter, no type filter
    else if (filterColor === 0 && filterType === 0) {
      return wardrobe;
    }
    // 2) Color filter, but no type filter
    else if (filterColor !== 0 && filterType === 0) {
      return wardrobe.filter((item) => item.colorTag === filterColor);
    }
    // 3) No color filter, type filter only
    else if (filterColor === 0 && filterType !== 0) {
      return wardrobe.filter((item) => item.typeTag === filterType);
    }
    // 4) Color filter and type filter
    else if (filterColor !== 0 && filterType !== 0) {
      let filterByColor = wardrobe.filter(
        (item) => item.colorTag === filterColor,
      );
      let filtered = filterByColor.filter(
        (item) => item.typeTag === filterType,
      );
      return filtered;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={numColumns}
        data={filterItems(props.wardrobe, props.filterColor, props.filterType)}
        renderItem={({item}) => (
          <Pressable onLongPress={onSelect.bind(this, item.key)}>
            <View style={styles.item}>
              <Image
                source={{uri: `data:image/png;base64,${item.photo}`}}
                style={styles.photo}
              />
            </View>
          </Pressable>
        )}
      />
      <Modal visible={detailVisible} transparent={true}>
        <TouchableWithoutFeedback onPress={setDetailVisible.bind(this, false)}>
          <View style={styles.nonDetailView} />
        </TouchableWithoutFeedback>
        <View style={styles.detailView}>
          <TouchableOpacity
            onPress={setDetailVisible.bind(this, false)}
            style={styles.undoButton}>
            <View>
              <Text style={styles.buttonText}>Undo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <View>
              <Text style={styles.buttonText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback onPress={setDetailVisible.bind(this, false)}>
          <View style={styles.nonDetailView} />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 1,
    flex: 1 / 3,
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
  },
  photo: {
    height: SCREENWIDTH / 3,
    width: SCREENWIDTH / 3,
  },
  nonDetailView: {
    flex: 3,
    // backgroundColor: 'red',
  },
  detailView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    // marginVertical: SCREENHEIGHT / 4,
    backgroundColor: '#1F1F1F',
    borderRadius: 30,
    //bottom: SCREENHEIGHT / 5,
    // borderWidth: 1,
    // borderColor: 'purple',
  },
  undoButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: '#141414',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    flex: 1,
    marginHorizontal: 20,
    // marginVertical: 5,
    height: 50,
    width: 1,
    backgroundColor: 'darkred',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Body;
