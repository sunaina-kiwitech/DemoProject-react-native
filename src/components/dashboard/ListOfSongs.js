import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    ScrollView
} from 'react-native';

import songList from '../../dummyData/songsList.json';

const ListOfSongs = () => {
    return (
        <Fragment>
            <View style={{ flex: 0.2 }} >
                <Text style={styles.header}>
                    Playlist
                </Text>
                <Image source={require('./../../../assests/images/dashboardimage.png')} style={styles.headerImage}
                />
            </View>
            <View style={{ flex: 0.8 }}>
                <ScrollView>
                    {
                        songList.songList.map((song, index) => {
                            return <View key={index} style={styles.songs}>
                                <Text style={styles.list}>
                                    {song.name} -  {song.artist}
                                </Text>
                            </View>
                        })
                    }
                </ScrollView>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    list: {
        color: 'brown',
        fontSize: 20,
        padding: 5,
    },
    songs: {
        borderWidth: 1,
        marginBottom: 2,
        marginTop: 2,
        marginRight: 1,
    },
    header: {
        color: 'black',
        fontSize: 80,
        fontWeight: 'bold',
        justifyContent: 'flex-start'

    },
    headerImage: {
        resizeMode: 'contain', height: 140,
        width: 660,
    }
});

export default ListOfSongs;
