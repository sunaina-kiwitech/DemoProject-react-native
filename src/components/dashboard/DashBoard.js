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
            <View style={styles.listofsongs}>
            <ListOfSongs/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 400, height: 200,
    },
    listofsongs: {
        justifyContent: 'flex-end'
    }
});

export default DashBoard;
