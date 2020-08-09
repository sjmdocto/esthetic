import React from 'react';
import {
    Modal, 
    View, 
    Text, 
    TouchableWithoutFeedback, 
    StatusBar,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

const EST_ORANGE = 'rgb(227, 131, 4)';
const EST_ORANGE_TRANSP = 'rgba(227, 131, 4, 0.92)';

const Menu = props => {
    return (
        <Modal 
            visible = {props.visible} 
            transparent = {true} 
            statusBarTranslucent = {true}
        >
            <View style = {styles.menuScreen}>
                <View style = {styles.menuArea}>
                    <View style = {styles.menuHeader}>
                        <Text style = {styles.filtersTitle}>Filters</Text>
                    </View>
                    <View style = {styles.menuBody}>
                        <View style = {styles.colorsContainer}>
                            <View style = {styles.categoriesHeader}>
                                <Icon 
                                    name = "triangle"
                                    size = {18}
                                    color = {'white'}
                                />
                                <Text style = {styles.categoriesText}>Colors</Text>
                            </View>
                        </View>
                        <View style = {styles.clothingContainer}>
                            <View style = {styles.categoriesHeader}>
                                <Icon 
                                    name = "triangle"
                                    size = {18}
                                    color = {'white'}
                                />
                                <Text style = {styles.categoriesText}>Clothing</Text>
                            </View>
                        </View>
                        <View style = {styles.doneContainer}>
                            <Text style = {styles.doneButton}>Done</Text>
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress = {props.onClose}>
                    <View style = {styles.nonMenuArea}>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    menuScreen: {
        flexDirection: 'row',
        flex: 1,
        // if android, can use StatusBar.currentHeight
        // else, for iOS, has to be set manually to 20
        paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0,
    },
    menuArea: {
        backgroundColor: EST_ORANGE_TRANSP,
        flex: 9,
        color: 'white',
    },
    menuHeader: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        //height: '8%', 
        flex: 8,
    },
    filtersTitle: {
        color: 'white',
        paddingTop: '3%',
        paddingLeft: '5%',
        fontWeight: 'bold',
        fontSize: 30,
    },
    menuBody: {
        paddingTop: '5%',
        paddingLeft: '5%',
        flex: 100,
    },
    colorsContainer: {
        flexGrow: 1,
        //flex: 1,
    }, 
    categoriesHeader: {
        flexDirection: 'row',
    },
    clothingContainer: {
        flexGrow: 1,
        //flex: 1,
    },
    categoriesText: {
        paddingLeft: 5,
        color: 'white',
        fontSize: 16,
    },
    doneContainer: {
        paddingBottom: '5%',
        alignItems: 'center',
    },
    doneButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    nonMenuArea: {
        flex: 4,
    },
});

export default Menu;