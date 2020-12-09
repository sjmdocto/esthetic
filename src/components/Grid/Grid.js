import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import filterCloset from '../../util/filterCloset';
import FilterContext from '../../util/FilterContext';
import {styles} from './Grid.style';

/**
 * Photo Grid for ClosetScreen
 * @param {*} props
 * @param {array} props.closet
 * @param {number} props.filterColor
 * @param {number} props.filterType
 * @param {function} props.onDelete
 */

const Grid = (props) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const [selectionKey, setSelectionKey] = useState('');

  const onSelect = (key) => {
    setSelectionKey(key);
    setDetailVisible(true);
  };

  const deleteHandler = () => {
    // 1) Delete item
    //    a) Delete from wardrobe
    //    b) Delete from AsyncStorage
    props.onDelete(selectionKey);
    // 2) Hide detail view
    setDetailVisible(false);
  };

  // const dataHandler = async (closet, filterColor, filterType) => {
  //   let closetWithPhotos = [];
  //   try {
  //     closetWithPhotos = await closet.map(connectPhotoToItem);
  //   } catch (e) {
  //     console.warn(e);
  //   }
  //   console.log('dataHandler.closet: ' + closetWithPhotos);
  //   const filteredCloset = filterCloset(
  //     closetWithPhotos,
  //     filterColor,
  //     filterType,
  //   );
  //   return filteredCloset;
  // };

  const renderItem = ({item}) => {
    return (
      <Pressable
        onLongPress={onSelect.bind(this, item.key)}
        accessible={true}
        accessibilityLabel={'Closet item'}>
        <View style={styles.item}>
          <Image
            source={{uri: `data:image/png;base64,${item.photo}`}}
            style={styles.photo}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <FilterContext.Provider>
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={filterCloset(props.closet, props.filterColor, props.filterType)}
          renderItem={renderItem}
          accessible={true}
        />
        <Modal visible={detailVisible} transparent={true}>
          <TouchableWithoutFeedback
            onPress={setDetailVisible.bind(this, false)}>
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
            <TouchableOpacity
              onPress={deleteHandler}
              style={styles.deleteButton}
              accessible={true}
              accessibilityLabel={'Delete button'}>
              <View>
                <Text style={styles.buttonText}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableWithoutFeedback
            onPress={setDetailVisible.bind(this, false)}>
            <View style={styles.nonDetailView} />
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </FilterContext.Provider>
  );
};

export default Grid;