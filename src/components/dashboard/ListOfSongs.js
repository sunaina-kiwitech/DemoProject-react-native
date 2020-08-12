import React from 'react';
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
        <View >
                <View >
                    <Text style={styles.header} >
                        Playlist
                </Text>
                </View>
            <ScrollView>
                {
                    songList.songList.map((song, index) => {
                        return <View key={index} style={{
                            flexflow: 'column wrap',
                        }}>
                            <Text style={styles.list}>
                                <Image source={require('./../../../assests/images/images.png')} style={{ width: 20, height: 20 }}
                                /> {song.name} -  {song.artist}
                            </Text>
                        </View>
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        color: 'grey',
        fontSize: 20,
        padding: 5,
    },
    header: {
        color: 'steelblue',
        fontSize: 40,
        fontWeight: 'bold',
        position:'absolute',
    }
});

export default ListOfSongs;
