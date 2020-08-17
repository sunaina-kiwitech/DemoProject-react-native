import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import ListOfSongs from './ListOfSongs';

const DashBoard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ListOfSongs navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default DashBoard;
