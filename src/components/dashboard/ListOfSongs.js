import React, { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Sound from 'react-native-sound';

const audioList = [
    {
        title: 'Shape of you',
        artist: 'ED Sheeran',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Closer',
        artist: 'The Chainsmokers',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Despacito',
        artist: 'Luis Fonsi feat. Daddy Yankee',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Something Just Like This',
        artist: 'The Chainsmokers & Coldplay',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'I Don’t Wanna Live Forever',
        artist: 'Taylor Swift',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Bom Bidi Bom',
        artist: 'Nicki Minaj',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Bad Liar',
        artist: 'Selena Gomez',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'No Frauds',
        artist: 'Nicki Minaj, Drake, Lil Wayne',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Miss You More',
        artist: 'Katy Perry',
        url: require('../../../assests/songs/taron.mp3')
    },
    {
        title: 'Swish Swish',
        artist: 'Katy Perry Ft Nicki Minaj',
        url: require('../../../assests/songs/taron.mp3')
    }
]

var sound1;
function playSound(item) {
    sound1 = new Sound(item.url, (error, sound) => {
        if (error) {
            alert('error' + error + message);
            return;
        }
        sound1.play(() => {
            sound1.release();
        })
    });
}

function stopSound(item, index) {
    sound1.stop(() => {
        console.log("sound bstop");
    })
}
const ListOfSongs = () => {
    return (
        <Fragment>
            <View style={{ flex: 1 }} >
                <Text style={styles.headerTitle}>
                    PLAYLIST
</Text>
                <ScrollView>
                    {audioList.map((item, index) => {
                        return (<View style={styles.feature} key={item.title}>
                            <Text style={{ flex: 1, fontSize: 14 }}>
                                {item.title} - {item.artist}
                            </Text>
                            <TouchableOpacity onPress={() => {
                                return playSound(item)
                            }}>
                                <Text style={styles.buttonPlay}>
                                    Play
        </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                return stopSound(item, index)
                            }}>
                                <Text style={styles.buttonStop}>
                                    Stop
        </Text>
                            </TouchableOpacity>
                        </View>)
                    })
                    }
                </ScrollView>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        padding: 10,
        fontSize: 20,
        paddingVertical: 20,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'darkgrey'
    },
    buttonPlay: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'steelblue',
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    buttonStop: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'brown',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    feature: {
        flexDirection: 'row',
        padding: 10,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderTopWidth: 1,
        backgroundColor: 'lightgrey'
    }
});

export default ListOfSongs;
