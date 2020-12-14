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
 * @function Grid
 * @param {*} props
 * @param {array} props.closet
 * @param {number} props.filterColor
 * @param {number} props.filterType
 * @param {function} props.onDelete
 */

const Grid = (props) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const [selectionKey, setSelectionKey] = useState('');

  /**
   * @function onSelect
   * @param {number} key
   */
  const onSelect = (key) => {
    setSelectionKey(key);
    setDetailVisible(true);
  };
  /**
   * @function deleteHandler
   * @returns {void}
   */
  const deleteHandler = () => {
    props.onDelete(selectionKey);
    setDetailVisible(false);
  };

  /**
   * FlatList custom renderItem function
   * @function renderItem
   * @param {{object}} item
   */
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
