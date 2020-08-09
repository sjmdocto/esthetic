import React from 'react';
import {
    View,
    FlatList, 
    Text, 
    StyleSheet, 
    Dimensions
} from 'react-native';

/* 
NOTE: If all the item tiles fit on screen,
the grid does not scroll on Android.
Basically, scrolling capability only works
if it's actually needed on Android.
*/
const SCREENWIDTH = Dimensions.get('window').width;

// should be moved to App.js since all parts of app need access to it
const clothingItems = [
    {name: 'Red Shirt', key: '0'},
    {name: 'Black Pants', key: '1'},
    {name: 'Yeezys', key: '2'},
    {name: 'White AF1', key: '3'},
    {name: 'Crocs', key: '4'},
    {name: 'Assless Chaps', key: '5'},
    {name: 'YANKEE WITH NO BRIM!!!', key: '6'},
    {name: 'Thong', key: '7'},
    {name: 'Tsinelas', key: '8'},
    {name: 'Black AF1 Activities', key: '9'},
    {name: 'WHAT ARE THOSE!!!!', key: '10'},
    {name: 'e-boy clothing', key: '11'},
    {name: 'ITEM 1', key: '12'},
    {name: 'ITEM 2', key: '13'},
    {name: 'ITEM 3', key: '14'},
    {name: 'ITEM 4', key: '15'},
    {name: 'ITEM 5', key: '16'},
    {name: 'ITEM 6', key: '17'},
];

const Body = () => {
    return (
        <View style = {styles.container}>
            <FlatList
                numColumns = {3}
                data = {clothingItems}
                renderItem = {({item}) => (
                    <View style = {styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: 'lightgray',
        margin: 1,
        flex: 1,
        height: SCREENWIDTH / 3,
        width: SCREENWIDTH / 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Body;