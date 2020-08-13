import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import ListOfSongs from './ListOfSongs';

const DashBoard = () => {
    return (
        <View style={styles.container}>
            <ListOfSongs />
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
